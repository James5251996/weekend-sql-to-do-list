# Project Name

SQL To-Do List

 - The purpose of this app is to be able to create a To-Do list where you can store you to do items on a database and be able to check off items you completed on your to-do list and delete items on your to-do list.

## Description

1. The first step that needs to be done is set up your project to be able to run a server.
    - install all of your dependencies and set up your server.js to get the server running when you run the server command in your terminal.

2. The next thing I worked on will be setting up the HTML to create an HTML that will show a list 
   show your to-do list items and all inputs to create a task.
    - for this i will alter the HTML

3. The next thing is to make sure the database info gets showed on the DOM on refresh
    - for this i will create a test input into the database and create a GET request on both client and router JS and have them link up so the show the info when the page is loaded. also create a render on the client side to append the database items to the DOM with a complete and delete button.

4. The next step would be able to add things to the to-do list 
    - now i will create a POST request so that when i add my task into my input box it will send the request to the router page and add it to the database and call my get function after its been added so it gets reflected on the DOM in the list.

5. The next step I will try to make a checkmark box to show when tasks have been completed
    - here i will make a checkmark box and when i check the box it will Update the status of the task on the database to be completed which is done with a PUT request. 

6. The last step will be to set up the delete button and request
    - here i will have the button set up so when it is clicked on it will delete the task from the database and it will refresh the DOM to show the change.

Your project description goes here. What problem did you solve? How did you solve it?

Additional README details can be found [here](https://github.com/PrimeAcademy/readme-template/blob/master/README.md).
