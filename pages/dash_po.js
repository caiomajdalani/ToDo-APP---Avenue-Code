'use strict';

class Dash {

    constructor(){
        this.warningMessage = $('.container div[class*=alert-info]');
        this.myTasks = $('.grey-jumbotron a[class*=success]');
        this.myTasksMenu = $('div.navbar-collapse.collapse > ul:nth-child(1) > li:nth-child(2) > a');
    }

}

module.exports = Dash;