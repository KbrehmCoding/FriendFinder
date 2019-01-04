const express = require("express");
const path = require("path");

const server = app.listening(3000, listening);

app.use(express.static('public'));

app.get('/survey')