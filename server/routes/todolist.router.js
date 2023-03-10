const express = require('express');
const router = express();
const pg = require('pg');

// create my pool so it will have the database info to pull
const pool = new pg.Pool({
    database: "weekend-to-do-app",
    host: "localhost",
    port: 5432,
})

// this is my GET request on my router to get the results
// from the database and then will send to the client.
router.get("/", (req, res) => {
    // here i am setting the query text to use the code to select all rows from the tasks table and
    // order by ID
    let queryText = 'SELECT * from "tasks" ORDER by "id";';
    // here I am using my pool.query to get the results and send to client to be required.
    pool.query(queryText)
    .then((results) => {
        console.log('inside of router GET', results)
        res.send(results.rows);
    }).catch((error) => {
        console.log('Error making Get request')
        res.sendStatus(500);
    })
})



module.exports = router;