const express = require('express');
const router = express();
const pg = require('pg');

// create my pool so it will have the database info to pull
const pool = new pg.Pool({
    database: "weekend-to-do-app",
    host: "localhost",
    port: 5432,
})

// here is my DELETE request



// here is my PUT request on the server side
router.put('/status/:id', (req, res) => {
    const taskID = req.params.id;
    console.log('task that will get completed is,', taskID);

    const queryText = `UPDATE "tasks" SET "status" = 'true' WHERE "id"=$1;`

    pool.query(queryText, [taskID])
    .then((results) => {
        console.log('inside server side PUT');
        res.sendStatus(200);
    }).catch((error) => {
        console.log('error in server side PUT', error);
        res.sendStatus(500);
    });
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

// here is the POST request to add the task to my to do list.
router.post('/', (req, res) => {
    let newTask = req.body;
    console.log('inside of server POST request', newTask);

    // create query text to add the task to the table in the database
    const queryText = `INSERT INTO "tasks"
	                ("task", "status")
                    VALUES
	                ($1, $2);`;

    // creating my pool now. 
    pool.query(queryText, [newTask.task, newTask.status])
    .then((results) => {
        res.sendStatus(200);
        console.log('POST WORKED');
    }).catch((error) => {
        console.log('error in POST on server route', error);
        alert('POST DID NOT WORK ON SERVER')
        res.sendStatus(500);
    })

});


module.exports = router;