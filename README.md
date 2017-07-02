# ToDo APP Automation

Funciontal tests for Avenue Code Engineer Test

> App [(link)](https://http://qa-test.avenuecode.com/)

## Test Management credentials
email: caio.majdalani@gmail.com
password: teste1234

The structure is based on three layers: features, steps and pages.

1. Features: Contains all the features of the project;
2. Steps: Contains all the steps implementations;
3. Pages: Contains all the pages in the website. A page must contain the declaration of all the elements of the page and the declaration of its actions.

## Pre Conditions

1. Node.js LTS (6.11)
2. Chromedriver

## Instalation

Install it as:

    $ npm install
    $ npm install -g protractor

## Usage

Too run tests in terminal, type:

```
  npn tests
  or
  protractor protractor.conf.js
```

To gerenate reports:

```
  npm report
  or
  ./node_modules/.bin/allure generate ./allure-results -o ./reports
```

To clean reports:

```
  rm -rf allure-results/
```

## Reports

1. To see reports, open reports/index.html on firefox