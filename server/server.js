const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(express.static('build'));

/** ---------- ROUTES ---------- **/
const moviesRouter = require('./routes/movies.router');
const detailsRouter = require('./routes/details.router');
const genresRouter = require('./routes/genres.router')
app.use('/api/movies', moviesRouter);
app.use('/api/details', detailsRouter);
app.use('/api/genres', genresRouter)

/** ---------- START SERVER ---------- **/
app.listen(port, function () {
    console.log('Listening on port: ', port);
});