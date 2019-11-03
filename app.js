const chalk = require('chalk');
const GeoCode = require('./utils/GeoCode');
const Forecast = require('./utils/Forecast');

GeoCode('new delhi', (error, data) => {
    console.log('error: ', error);
    console.log('data: ', data);
});

Forecast(longitude = 77.2, latitude = 28.7, (error, data) => {
    console.log('error: ', error);
    console.log('data: ', data);
});
