console.log('JS is sourced properly')

// I am creating my function to call my listeners when the page is loaded.
$(document).ready(onReady);

function onReady() {
    // here i will add my Get request function so that the table loads when the page is refreshed.
    getTasks()
    // here is my listenr so when i click on the add button it will add the task i want.
    $('#addBtn').on('click', addTask);

    // here is my listener so when i click on the check box it runs the task complete function.
    $('#addToTable').on('click', '#checkBox', taskComplete)
};

// here is where my client side PUT will be to update the status upon completion to true.
function taskComplete () {
    console.log('inside of task complete function');
    const taskComplete = $(this).parent().parent().data().id;
    console.log('id of task to complete is', taskComplete);

    $.ajax({
        method: 'PUT',
        url: `/tasks/status/${taskComplete}`
    }).then((response) => {
        getTasks();
    }).catch((error) => {
        alert('ERROR MAKING CLIENT PUT');
    })
}


// My POST ajax request
function addTask () {
    // test console.log to make sure the function is called when i use the add button.
    console.log('inside of my add task function')

    let tasks = {
        task: $('.taskInput').val(),
        status: $('#checkBox').val(),
    };
    // i will create an if statement so that the add button will not work.
    // unless there is an input value in the input box first
    if (tasks.task) {
        $.ajax({
            method: 'POST',
            url: '/tasks',
            data: tasks,
        }).then((response) => {
            console.log('inside ajax post request');
            getTasks();
        }).catch((error) => {
            console.log('error in ajax post', error);
            alert('AJAX POST FAILED');
        })
    } else {
        alert('MISSING INPUTS')
    }
};

// My Get ajax Request
function getTasks() {
    console.log('inside my Get Tasks function');
    // my ajax request to pull my table info.
    $.ajax({
        type: 'GET',
        url: '/tasks',
    }).then((response) => {
        console.log('inside GET ajax', response);
        // render to page function goes here.
        renderTasks(response);
    }).catch((error) => {
        console.log('error in Get ajax', error);
        alert('ERROR IN GET AJAX');
    })
};

// here i will have my reneder function to append the table data to the DOM
function renderTasks(tasks) {
    console.log('inside of render tasks function')
    $('#addToTable').empty();
    for (task of tasks) {
        if (task.status) {
        $('#addToTable').append(`
        <tr data-id=${task.id} style="background-color:green">
            <td>${task.task}</td>
            <td><input type="checkbox" id="checkBox" value="false">
            <label for="checkBox">Completed</label>
            </td>
            <td><button id="deleteBtn">Delete</button></td>
        </tr>
        `)
        } else {
            $('#addToTable').append(`
            <tr data-id=${task.id} style="background-color:gold">
                <td>${task.task}</td>
                <td><input type="checkbox" id="checkBox" value="false">
                <label for="checkBox">Completed</label>
                </td>
                <td><button id="deleteBtn">Delete</button></td>
            </tr>
            `)
        }
    }
}