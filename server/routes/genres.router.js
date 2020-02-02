const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/:id', (req, res) => {
    const queryText = `
    SELECT "genres".name, "movies".title FROM "genres"
    JOIN "movies_genres" ON "movies_genres".genres_id = "genres".id
    JOIN "movies" ON "movies".id = "movies_genres".movies_id
    WHERE "movies".id = $1;                    
`
    pool.query(queryText, [req.params.id])
        .then((result) => { res.send(result.rows); })
        .catch((err) => {
            console.log('Error completing SELECT plant query', err);
            res.sendStatus(500);
        });
});

module.exports = router;
