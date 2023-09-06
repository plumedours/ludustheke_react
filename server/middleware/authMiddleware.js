import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
const jwtSecret = process.env.JWT_SECRET;

// Middleware pour vérifier l'authenticité du token JWT
function authenticateToken(req, res, next) {
	const token = req.headers.authorization; // Récupérez le token JWT des en-têtes
    console.log('midllewaretoken', token);

	if (!token) {
		return res
			.status(401)
			.json({ error: 'Accès non autorisé, token manquant.' });
	}

	console.log('TOKEN', token);

	// Vérifiez le token JWT en utilisant le secret JWT du fichier .env
	jwt.verify(token, jwtSecret, (err, user) => {
		if (err) {
            console.log('err', err);
			return res.status(403).json({ error: 'Token JWT non valide.' });
		}

		// Si la vérification réussit, ajoutez l'utilisateur au req pour y accéder dans d'autres routes
		req.user = user;
		next(); // Passez au middleware suivant ou à la route
	});
}

export default authenticateToken;
