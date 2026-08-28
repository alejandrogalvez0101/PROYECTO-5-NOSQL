
const express = require('express');

const Movie = require('../models/movie');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const movies = await Movie.find();
    return res.status(200).json(movies);
  } catch (error) {
    return next(error);
  }
});

router.get('/id/:id', async (req, res, next) => {
  const id = req.params.id;
  try {
    const movie = await Movie.findById(id);
    if (movie) {
      return res.status(200).json(movie);
    } else {
      return res.status(404).json('No movie found by this id');
    }
  } catch (error) {
    return next(error);
  }
});

router.get('/title/:title', async (req, res, next) => {
  const { title } = req.params;
  try {
    const movieByTitle = await Movie.find({ title });
    return res.status(200).json(movieByTitle);
  } catch (error) {
    return next(error);
  }
});

router.get('/genre/:genre', async (req, res, next) => {
  const { genre } = req.params;
  try {
    const movieByGenre = await Movie.find({ genre });
    return res.status(200).json(movieByGenre);
  } catch (error) {
    return next(error);
  }
});

router.get('/year/:year', async (req, res, next) => {
  const { year } = req.params;
  try {
    const movieByYear = await Movie.find({ year: { $gt: year } });
    return res.status(200).json(movieByYear);
  } catch (error) {
    return next(error);
  }
});

router.post('/create', async (req, res, next) => {
  try {
    const newMovie = new Movie({
      title: req.body.title,
      director: req.body.director,
      year: req.body.year,
      genre: req.body.genre,
    });

    const createdMovie = await newMovie.save();
    return res.status(201).json(createdMovie);
  } catch (error) {
    next(error);
  }
});

router.put('/edit/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const movieModify = new Movie(req.body);
    movieModify._id = id;
    const movieUpdated = await Movie.findByIdAndUpdate(id, movieModify);
    return res.status(200).json(movieUpdated);
  } catch (error) {
    return next(error);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    await Movie.findByIdAndDelete(id);
    return res.status(200).json('Movie deleted!');
  } catch (error) {
    return next(error);
  }
});

module.exports = router;