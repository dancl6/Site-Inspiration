// get the client
const mysql = require('mysql2');
// const ctable
const cTable = require('console.table');
// use node.js file structure module
const fs = require('fs');
// require('dotenv').config();
const express = require('express');

// declare variables, arrays and objects



// create the connection to database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    port: 3306,
    password: 'mysql',
    database: 'company'
  });

// create variables for selecting from database 
const rolesAll = `SELECT * FROM roles`;