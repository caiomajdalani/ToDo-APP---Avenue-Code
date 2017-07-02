'use strict';

const Login = require('../pages/login_po.js');
const Dash = require('../pages/dash_po.js');
const Tasks = require('../pages/tasks_po.js');
const Helper = require('../helper.js');
const login = new Login();
const dash = new Dash();
const tasks = new Tasks();
const helper = new Helper();

describe('Login', function () {
    it('when user informs an incorrect password', function () {
        //The user should be informed if inserts a incorrect user or password
        login.go();
        login.with('incorret@incorret.com', 'incorrect');
        expect(login.warningMessage.getText())
            .toEqual('Invalid email or password.');
    });
    it('with success', function () {
        login.with('caio.majdalani@gmail.com', 'teste1234');
        expect(dash.warningMessage.getText())
            .toEqual('Signed in successfully.');
    });
    // afterEach(function() {
    //     helper.takeShot();
    // });
});

describe('After login', function () {
    it('check the tasks button on navbar', function () {
        //The user should always see the ‘My Tasks’ link on the NavBar
        expect(dash.myTasksMenu.isDisplayed()).toBe(true);
    });
    it('check the My Tasks button', function () {
        expect(dash.myTasks.isDisplayed()).toBe(true);
    });
    // afterEach(function() {
    //     helper.takeShot();
    // });
});

describe('After click on MyTasks', function () {
    it('check welcome message', function () {
        //Clicking this link will redirect the user to a page with all the created tasks so far
        dash.myTasksMenu.click().then(function () {
            //The user should see a message on the top part saying that list belongs to the logged user
            expect(tasks.toDoMessage.getText()).toEqual("Caio Majdalani's ToDo List");
        });
    });
    // afterEach(function() {
    //     helper.takeShot();
    // });
});

describe('Create a new task', function () {

    beforeEach(function () {
        //clear the tasks
        browser.sleep(1000);
        var tasksToRemove = tasks.removeTaskButton.then(function (tasksToRemove) {
            for (var i = 0; tasksToRemove.length >= i; i++) {
                tasks.removeTaskButton.click();
            };
        });
    });

    afterEach(function () {
        // helper.takeShot();
        //clear the tasks
        browser.sleep(1000);
        var tasksToRemove = tasks.removeTaskButton.then(function (tasksToRemove) {
            for (var i = 0; tasksToRemove.length >= i; i++) {
                tasks.removeTaskButton.click();
            };
        });
    });

    it('by hitting enter', function () {
        //The user should be able to enter a new task by hitting enter or clicking on the add task button.
        tasks.newTaskLabel.sendKeys('Task inserted with Enter', protractor.Key.ENTER);
        //When added, the task should be appended on the list of created tasks.
        expect(tasks.tasksList.getText()).toEqual('Task inserted with Enter');
    });

    it('with less than 3 characters', function () {
        //The task should require at least three characters so the user can enter it
        tasks.newTaskLabel.sendKeys('ab', protractor.Key.ENTER);
        //When added, the task should NOT be appended on the list of created tasks.
        expect(tasks.tasksList.isDisplayed()).toBe(false);
    });

    it('with more than 250 characters', function () {
        //The task can’t have more than 250 characters. 
        var stringTask = tasks.generateString(251);
        tasks.newTaskLabel.sendKeys(stringTask, protractor.Key.ENTER);
        //When added, the task should NOT be appended on the list of created tasks.
        expect(tasks.tasksList.isDisplayed()).toBe(false);
    });

    it('by clicking on the add task button', function () {
        //The user should be able to enter a new task by hitting enter or clicking on the add task button.
        tasks.newTaskLabel.sendKeys('Task inserted with + button').then(function () {
            tasks.newTaskButton.click();
        });
        //When added, the task should be appended on the list of created tasks.
        expect(tasks.tasksList.getText()).toEqual('Task inserted with + button');
    });

});