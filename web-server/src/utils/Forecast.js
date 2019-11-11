const request = require('request');

const Forecast = (longitude, latitude, callback) => {
    const url = `https://api.darksky.net/forecast/82bd40d85d184e52b0ff6b1bac7fe58b/${latitude},${longitude}?units=si&exclude=hourly,minutely`;

    request({ url, json: true}, (error, { body }) => { //{body} = response ex-destructuring
        if(error) {
            callback('Unable to connect the weather services!', undefined)
        }
        else if(body.error) {
            callback('Unable to find location! try another Location.', undefined);
        }
        else {
            callback(undefined, `${body.daily.data[0].summary} It is ${body.currently.temperature} Degrees Celsius out. There is ${body.currently.precipProbability}% chances of rain.`);
        }
    });
};

module.exports = Forecast;