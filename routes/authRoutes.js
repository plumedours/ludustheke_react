import express from 'express';
import {
	registerUser,
	loginUser,
	logoutUser,
	refreshToken,
	// getUser,
} from '../authController.js'; // Importez les fonctions de contrôleur

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/logout', logoutUser);
router.get('/token', refreshToken);
// router.get('/user', getUser);

export default router;