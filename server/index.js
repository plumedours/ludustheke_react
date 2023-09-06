import express from 'express';
import mysql from 'mysql';
import cors from 'cors';
// import authController from "./authController.js";
import authRoutes from './routes/authRoutes.js';
import cookieParser from 'cookie-parser';
import authenticateToken from './middleware/authMiddleware.js';

const corsOptions = {
	origin: 'http://localhost:5173', // Remplacez ceci par l'URL de votre frontend
	credentials: true, // Permet l'envoi de cookies et d'en-têtes d'authentification
};

const app = express();
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const db = mysql.createConnection({
	host: 'localhost',
	user: 'Admin',
	password: 'admin123',
	database: 'ludusthekestrapi',
});

app.get('/', (req, res) => {
	res.json('hello');
});

app.get('/games', (req, res) => {
	const q = `
  SELECT 
    games.*,
	theme.name AS theme_name,
    GROUP_CONCAT(categories.name) AS category_names,
    COUNT(games_comments.id) AS numComments
  FROM 
    games
  LEFT JOIN 
    games_comments ON games.id = games_comments.games_id
  LEFT JOIN
	theme ON games.theme_id = theme.id
  LEFT JOIN
    game_categories ON games.id = game_categories.game_id
  LEFT JOIN
    categories ON game_categories.category_id = categories.id
  GROUP BY 
    games.id;
`;
	db.query(q, (err, data) => {
		if (err) {
			console.log(err);
			return res.json(err);
		}
		// console.log(data);
		return res.json(data);
	});
});

app.post('/games', (req, res) => {
	const q =
		'INSERT INTO games(`title`, `description`, `pending`, `cover`, `likes`, `shortDesc`) VALUES (?)';

	const values = [
		req.body.title,
		req.body.description,
		req.body.pending,
		req.body.cover,
		req.body.likes,
		req.body.shortDesc,
	];

	db.query(q, [values], (err, data) => {
		if (err) return res.send(err);
		return res.json(data);
	});
});

app.delete('/games/:id', (req, res) => {
	const bookId = req.params.id;
	const q = ' DELETE FROM games WHERE id = ? ';

	db.query(q, [bookId], (err, data) => {
		if (err) return res.send(err);
		return res.json(data);
	});
});

app.put('/games/:id', (req, res) => {
	const bookId = req.params.id;
	const q =
		'UPDATE games SET `title`= ?, `description`= ?, `pending`= ?, `cover`= ?, `likes` = ?, `shortDesc` = ? WHERE id = ?';

	const values = [
		req.body.title,
		req.body.description,
		req.body.pending,
		req.body.cover,
		req.body.likes,
		req.body.shortDesc,
	];

	db.query(q, [...values, bookId], (err, data) => {
		if (err) return res.send(err);
		return res.json(data);
	});
});

app.listen(5000, () => {
	console.log('Connected to backend.');
});

//GET COMMENTS
app.get('/games/:gameId/comments', (req, res) => {
	const gameId = req.params.gameId;
	const q = 'SELECT * FROM games_comments WHERE games_id = ?';

	db.query(q, [gameId], (err, data) => {
		if (err) {
			console.log(err);
			return res.json(err);
		}
		return res.json(data);
	});
});

//SEARCH
app.get('/search', (req, res) => {
	const q = 'SELECT * FROM games WHERE title LIKE ?';
	const search = req.query.search;

	db.query(q, ['%' + search + '%'], (err, data) => {
		if (err) {
			console.log(err);
			return res.json(err);
		}
		return res.json(data);
	});
});

//Get one game
app.get('/games/:id', (req, res) => {
	const gameId = req.params.id;

	// Query to get game details
	const gameQuery = 'SELECT * FROM games WHERE id = ?';
	// Query to get comments count for the game
	const commentsCountQuery =
		'SELECT COUNT(*) as comment_count FROM games_comments WHERE games_id = ?';
	// Query to get comments for the game with author names
	const commentsQuery = `
		SELECT bc.*, u.pseudo, u.avatar 
		FROM games_comments bc
		LEFT JOIN users u ON bc.user_id = u.id
		WHERE bc.games_id = ?;
	`;

	db.query(gameQuery, [gameId], (err, gameData) => {
		if (err) {
			console.log(err);
			return res
				.status(500)
				.json({ error: 'An error occurred while fetching game data.' });
		}

		db.query(commentsCountQuery, [gameId], (err, commentCountData) => {
			if (err) {
				console.log(err);
				return res
					.status(500)
					.json({ error: 'An error occurred while fetching comments count.' });
			}

			db.query(commentsQuery, [gameId], (err, commentsData) => {
				if (err) {
					console.log(err);
					return res
						.status(500)
						.json({ error: 'An error occurred while fetching comments data.' });
				}

				const gameDetails = gameData[0];
				const comments = commentsData;
				const commentCount = commentCountData[0].comment_count;

				const responseData = {
					game: gameDetails,
					comments: comments,
					commentCount: commentCount,
				};

				return res.json(responseData);
			});
		});
	});
});

// Route pour obtenir les informations de l'utilisateur connecté
app.get('/dashboard', authenticateToken, (req, res) => {
	const userId = req.user.id; // Obtenez l'ID de l'utilisateur à partir du token JWT
	console.log('USERid', userId);
	console.log('USER', req.user);
	console.log('REQ', req);
	console.log('RES', res);

	const q = 'SELECT * FROM users WHERE id = ?';
	db.query(q, [userId], (err, data) => {
		if (err) {
			console.log(err);
			return res.status(500).json({
				error: 'Erreur lors de la récupération des informations utilisateur',
			});
		}
		if (data.length === 0) {
			return res.status(404).json({ error: 'Utilisateur non trouvé' });
		}
		const userInfo = data[0]; // Récupérez les informations de l'utilisateur
		return res.json(userInfo);
	});
});

// // Route pour obtenir les jeux proposés par l'utilisateur connecté
// app.get('/dashboard/user-games', authenticateToken, (req, res) => {
// 	const userId = req.user.id; // Obtenez l'ID de l'utilisateur à partir du token JWT
// 	const q = 'SELECT * FROM games WHERE user_id = ?';

// 	db.query(q, [userId], (err, data) => {
// 		if (err) {
// 			console.log(err);
// 			return res.status(500).json({
// 				error: "Erreur lors de la récupération des jeux de l'utilisateur",
// 			});
// 		}
// 		return res.json(data);
// 	});
// });

app.get('/test', (req, res) => {
	const q = `
  SELECT * FROM users `;
	db.query(q, (err, data) => {
		if (err) {
			console.log(err);
			return res.json(err);
		}
		// console.log(data);
		return res.json(data);
	});
});

// AUTH
app.use(authRoutes);
