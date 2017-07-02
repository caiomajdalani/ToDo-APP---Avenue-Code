'use strict';

class Tasks {
    constructor() {
        this.toDoMessage = $('body h1');
        this.newTaskLabel = element(by.model('newTask.body'));
        this.newTaskButton = $('.input-group span[class*=glyphicon]'); //or hit 'enter'
        this.tasksList = $('.ng-scope a[class*=editable]');
        this.removeTaskButton = element.all(by.cssContainingText('.btn-danger','Remove'));
        this.subtaskButton = $('td:nth-child(4) > button');
    }

    generateString(len) {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (var i = 0; i < len; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    }
}

module.exports = Tasks;