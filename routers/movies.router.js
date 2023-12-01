const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movies.controller');
const authMiddleware = require('../utils/auth.middleware');

router.get('/', movieController.getMovies);

router.get('/:movieId', movieController.getMoviesbyId);

router.post('/', authMiddleware.authenticateToken, movieController.newMovie);

router.put('/:movieId', authMiddleware.authenticateToken, movieController.updateMovie);

router.delete('/:movieId', authMiddleware.authenticateToken, movieController.deleteMovie);

module.exports = router;