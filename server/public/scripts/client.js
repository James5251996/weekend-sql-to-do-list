console.log('JS is sourced properly')

// I am creating my function to call my listeners when the page is loaded.
$(document).ready(onReady);

function onReady() {
    // here i will create a object that will store the data.
    let tasks = {
        task: $('.taskInput').val(),
    };
    // here i will add my Get request function so that the table loads when the page is refreshed.
    getTasks()
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
        $('#addToTable').append(`
        <tr data-id=${task.id}>
            <td>${task.task}</td>
            <td><input type="checkbox" id="checkBox" value="true">
            <label for="checkBox">Completed</label>
            </td>
            <td><button id="deleteBtn">Delete</button></td>
        </tr>
        `)
    }
}