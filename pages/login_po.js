'use strict'

class Login {

    constructor() {
        this.userName = element(by.id('user_email'));
        this.password = element(by.id('user_password'));
        this.signIn = $('#new_user input[class*=primary]');
        this.warningMessage = $('.container div[class*=warning]');
    }

    go() {
        browser.get('users/sign_in');
    }

    with(user, pwd) {
        this.userName.clear().sendKeys(user);
        this.password.clear().sendKeys(pwd);
        this.signIn.click();
        browser.sleep(3000);
    }

}

module.exports = Login;