const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const smartphoneRoutes = require('./routes/smartphonesRoutes');

//Port Config
app.set('port', process.env.PORT || 4100);

//dev Config
app.use(morgan('dev'));
app.use(cors());

//Json config
app.use(express.json());
app.use(express.urlencoded({extended: true}));


//Routers
app.use(smartphoneRoutes);

module.exports = app;