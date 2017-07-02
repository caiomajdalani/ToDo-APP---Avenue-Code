'use strict';
const Login = require('../pages/login_po.js');
const Dash = require('../pages/dash_po.js');
const Tasks = require('../pages/tasks_po.js');
const SubtaskModal = require('../pages/subtaskModal_po.js');
const faker = require('faker');
const Helper = require('../helper.js');

const login = new Login();
const dash = new Dash();
const tasks = new Tasks();
const subtask = new SubtaskModal();
const helper = new Helper();

describe('Subtasks:', function () {

    beforeEach(function () {
        browser.sleep(1000);
    });

    // afterEach(function () {
    //     helper.takeShot();
    //     browser.sleep(1000);
    // });

    it('create a task and see the subtask button', function () {
        tasks.newTaskLabel.sendKeys('Task inserted to display Subtask Button', protractor.Key.ENTER);
        //The user should see a button labeled as ‘Manage Subtasks’
        expect(tasks.subtaskButton.isDisplayed()).toBe(true);
    });

    it('number of subtasks created for this task', function () {
        //This button should have the number of subtasks created for that tasks
        expect(tasks.subtaskButton.getText()).toEqual('(0) Manage Subtasks');
    });

    it('create subtasks and check counter again', function () {
        tasks.subtaskButton.click().then(function () {
            subtask.description.sendKeys('Teste1', protractor.Key.ENTER);
            subtask.description.sendKeys('Teste2', protractor.Key.ENTER);
        });
        subtask.closeButton.click().then(function () {
            //This button should have the number of subtasks created for that tasks
            expect(tasks.subtaskButton.getText()).toEqual('(2) Manage Subtasks');
        });
    });
    //This popup should have a read only field with the task ID and the task description
    it('open subtask modal and check ID field', function () {
        tasks.subtaskButton.click();
        //check if task ID field is disabled
        expect(subtask.modalTitle.isEnabled()).toBe(false);
    });
    it('check task description field', function () {
        //check if task description field is disabled
        expect(subtask.task.isEnabled()).toBe(false);
    });
});
describe('Manipulate Subtask Modal:', function(){

    beforeEach(function () {
        browser.sleep(1000);
        var subtasksToRemove = subtask.removeButton.then(function (subtasksToRemove) {
            for (var i = 0; subtasksToRemove.length >= i; i++) {
                    subtask.removeButton.click();
            };
        });
        browser.sleep(1000);
    });

    //There should be a form so you can enter the SubTask Description (250 characters) 
    it('add more than 250 characters to SubTask Description', function () {
        var stringSubTask = tasks.generateString(251);
        subtask.description.sendKeys(stringSubTask, protractor.Key.ENTER);
        expect(subtask.list.isDisplayed()).toBe(false);
        if (subtask.list.isDisplayed()) subtask.list.click();
    });
    //and SubTask due date (MM/dd/yyyy format)
    it('add a invalid date', function(){
        subtask.date.sendKeys('abcde', protractor.Key.ENTER);
        expect(subtask.list.isDisplayed()).toBe(false);
    });
    //The user should click on the add button to add a new Subtask
    it('add a subtask with + button', function(){
        subtask.description.sendKeys('Subtask with + Button');
        subtask.addButton.click();
        expect(subtask.list.getText()).toEqual("Subtask with + Button");
    });
    //The Task Description and Due Date are required fields
    it('try to add a subtask without Task Description or Due Date', function(){
        subtask.description.clear();
        subtask.date.clear();
        subtask.addButton.click();
        expect(subtask.list.isDisplayed()).toBe(false);
    });
    //Subtasks that were added should be appended on the bottom part of the modal dialog
    it('add several subtasks and check the order', function(){
        subtask.description.sendKeys('Teste 1');
        subtask.addButton.click();
        expect(subtask.list.getText()).toEqual('Teste 1');
        subtask.description.sendKeys('Teste 2');
        subtask.addButton.click();
        expect(subtask.list.getText()).toEqual('Teste 1');
    });
    // afterEach(function() {
    //     helper.takeShot();
    // });
});