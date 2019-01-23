const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, () => {
    console.log('App listening on PORT: ' + PORT);
});

app.use('/js', express.static(__dirname + '/app/public/js'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);
