import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import db from './config/Database.js';
import dotenv from 'dotenv';

dotenv.config();
const jwtSecret = process.env.JWT_SECRET;

// Fonction pour enregistrer un nouvel utilisateur
export const registerUser = async (req, res) => {
	try {
		const { pseudo, email, password } = req.body;

		// Vérification si l'utilisateur existe déjà dans la base de données
		const existingUser = await db.query('SELECT * FROM users WHERE email = ?', [
			email,
		]);

		if (existingUser.length > 0) {
			return res.status(400).json({ msg: "L'utilisateur existe déjà." });
		}

		// Hash du mot de passe
		const saltRounds = 10;
		const hashedPassword = await bcrypt.hash(password, saltRounds);

		// Insertion de l'utilisateur dans la base de données
		await db.query(
			'INSERT INTO users (pseudo, email, password, role) VALUES (?, ?, ?, "user")',
			[pseudo, email, hashedPassword]
		);

		return res
			.status(201)
			.json({ msg: "L'utilisateur a été enregistré avec succès." });
	} catch (error) {
		console.error(error);
		return res.status(500).json({
			msg: "Une erreur est survenue lors de l'enregistrement de l'utilisateur.",
		});
	}
};

// LOGIN
export const loginUser = (req, res) => {
	const { email, password } = req.body;

	db.query('SELECT * FROM users WHERE email = ?', [email], (error, results) => {
		if (error) {
			console.error(error);
			return res
				.status(500)
				.json({ msg: 'Une erreur est survenue lors de la connexion.' });
		}

		if (results.length === 0) {
			return res.status(400).json({ msg: 'Identifiants invalides.' });
		}

		const user = results[0];
		console.log('user', user);
		
		bcrypt.compare(password, user.password, (err, match) => {
			if (err || !match) {
				return res.status(400).json({ msg: 'Identifiants invalides.' });
			}

			const payload = {
                userId: user.id,
                role: user.role // Ajoutez le rôle de l'utilisateur au payload
            };

            const token = jwt.sign(payload, jwtSecret, {
                expiresIn: '1h',
            });

			console.log('token 2', token);
			console.log('playload', payload);

			const cookieOptions = {
				httpOnly: false,
				maxAge: 3600000, // Durée d'expiration du cookie en millisecondes (1 heure)
			};

			res.cookie('token', token, cookieOptions, { sameSite: 'none', secure: true });
			res.header('Authorization', `Bearer ${token}`);

			return res.status(200).json({ token });
		});
	});
};

// LOGOUT
export const logoutUser = (req, res) => {
	res.clearCookie('token'); // Supprime le cookie "token"
	return res.status(200).json({ msg: 'Déconnexion réussie.' });
};

// Fonction pour rafraîchir le token JWT
export const refreshToken = (req, res) => {
	try {
		// Récupération du token depuis les cookies ou les headers
		const token =
			req.cookies.token ||
			(req.headers.authorization && req.headers.authorization.split(' ')[1]);

		// Vérification du token
		if (!token) {
			return res.status(401).json({ msg: 'Token manquant.' });
		}

		jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
			if (err) {
				return res.status(403).json({ msg: 'Token invalide.' });
			}

			// Génération d'un nouveau token avec une nouvelle expiration
			const newToken = jwt.sign(
				{ userId: decodedToken.userId },
				process.env.JWT_SECRET,
				{ expiresIn: '1h' }
			);

			return res.status(200).json({ accessToken: newToken });
		});
	} catch (error) {
		console.error(error);
		return res.status(500).json({
			msg: 'Une erreur est survenue lors du rafraîchissement du token.',
		});
	}
};

// Fonction pour récupérer la liste des utilisateurs
// export const getUser = async (req, res) => {
// 	try {
// 		const users = db.query('SELECT * FROM users'); // Exécute la requête et extrait les résultats

// 		// Assurez-vous que "users" est bien un tableau
// 		if (!Array.isArray(users)) {
// 			return res.status(500).json({
// 				msg: 'La requête de récupération des utilisateurs a échoué.',
// 			});
// 		}

// 		return res.status(200).json(users);
// 	} catch (error) {
// 		console.error(error);
// 		return res.status(500).json({
// 			msg: 'Une erreur est survenue lors de la récupération des utilisateurs.',
// 		});
// 	}
// };
