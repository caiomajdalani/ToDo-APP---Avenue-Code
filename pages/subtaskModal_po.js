'use strict';

class SubtaskModal {
    constructor(){
        this.task = element(by.model('task.body'));
        this.addButton = $('#add-subtask');
        this.modalTitle = $('.modal-header.ng-scope > h3');
        this.closeButton = $('.modal-footer button[class*=btn-primary]');
        this.description = $('#new_sub_task');
        this.date = $('#dueDate');
        this.removeButton = element.all(by.cssContainingText('.btn-danger','Remove SubTask'));
        this.list = element(by.binding('sub_task.body'));
    }
}

module.exports = SubtaskModal;