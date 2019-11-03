const request = require('request');

const Forecast = (longitude, latitude, callback) => {
    const url = `https://api.darksky.net/forecast/82bd40d85d184e52b0ff6b1bac7fe58b/${longitude},${latitude}?units=si&exclude=hourly,minutely`;

    request({url: url, json: true}, (error, response) => {
        if(error) {
            callback('Unable to connect the weather services!', undefined)
        }
        else if(response.body.error) {
            callback('Unable to find location! try another Location.', undefined);
        }
        else {
            callback(undefined, 'data');
        }
    });
};

module.exports = Forecast;