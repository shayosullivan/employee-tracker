const express = require("express");
const inqurer = require("inquirer");
const mysql = require("mysql2");
const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
