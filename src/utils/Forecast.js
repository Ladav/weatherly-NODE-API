const request = require('request');

const Forecast = (longitude, latitude, callback) => {
    const url = `https://api.darksky.net/forecast/${process.env.FORECAST}/${latitude},${longitude}?units=si&exclude=minutely`;

    request({ url, json: true }, (error, { body }) => { //{body} = response.body ex-destructuring
        if (error) {
            callback('Unable to connect the weather services!', undefined)
        }
        else if (body.error) {
            callback('Unable to find location! try another Location.', undefined);
        }
        else {
            // callback(undefined, `${body.daily.data[0].summary} It is ${body.currently.temperature} Degrees Celsius out. The high today is ${body.daily.data[0].temperatureHigh} Degrees Celsius, with a low of ${body.daily.data[0].temperatureLow} Degrees Celsius. There is ${body.currently.precipProbability}% chances of rain.`);
            callback(undefined, body);
        }
    });
};

module.exports = Forecast;