# Paystack
![npm](https://img.shields.io/npm/v/paystack-pay)
![npm](https://img.shields.io/npm/dt/paystack-pay)
![NPM](https://img.shields.io/npm/l/paystack-pay)
## About
This provides easy access to paystack APIS. All are properly & fully tested. Available features include:
- Account: get balance, statement, transfers and transactions.
- Payment: create dynamic account.
- Tool: banks, resolve Bank account number, check transaction dtatus, check transfer Status.
- Transfer: initiate transfer to bank account.
- USSD: get ussd banks, generate ussd code for payment/collection.

## Getting Started

> [Technologies](#technologies-used) &middot;  [Installations](#installations) &middot;  [Usage](#usage) &middot;  [Components](#components) &middot;  [Tests](#tests) &middot;  [Author](#author)


## Technologies Used
- [ESLint](https://eslint.org/) - A pluggable and configurable linter tool for identifying and reporting on patterns in JavaScript.
- [Jest](https://jestjs.io/) - Jest is a JavaScript testing framework maintained by Facebook, Inc. designed and built by Christoph Nakazawa with a focus on simplicity and support for large web applications.
- [Airbnb](https://www.npmjs.com/package/eslint-config-airbnb) style guide was followed.
- [TypeScript](https://www.typescriptlang.org/)


## Installations

#### Getting started

- You need to have your paystack secret key and NPM installed on your computer.

#### Setup

- Installing the project dependencies
  > Run the command below
  ```shell
  $ npm install paystack-pay
  ```

## Usage
```shell
$ const { Paystack } = require('paystack-pay');
$ const  paystack = new Paystack('your-secret-key');
```

## Components
- Transaction
    - Initiate transaction
  ``` javascript
   paystack.transaction.initialize({
    channels: ['card'], // not required  ["card", "bank", "ussd", "qr", "mobile_money", "bank_transfer", "eft"]
    amount: 900, // required
    email: 'elon@musk.com', // required
    callback_url: 'your-callback-url', // required
    metadata: { userId: 1 }, // not required
    reference: 'your-unique-reference', // required
  }) 
  ``` 
    - VERIFY TRANSACTION
  ``` javascript
   paystack.transaction.verify('your-unique-reference',) 
  ``` 
    - CHARGE TRANSACTION AUTHORIZATION
  ``` javascript
   paystack.transaction.chargeAuthorization({
   authorization_code: 'AUTH_CODE'; //required
   email: 'youruser@musk.com',  //required
   amount; // required // this is kobo
   metadata:{userId:303030},// required
   reference:'your-unique-reference' //not required
  })  
  ``` 
 

## Author
- [Tina](https://github.com/oluwabukolatina)
