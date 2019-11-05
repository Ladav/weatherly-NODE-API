const request = require('request');

const GeoCode = (location, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?access_token=pk.eyJ1IjoibGFkYXY0MTMiLCJhIjoiY2syaDR5YzRiMDV0ZTNubzAwY2l2M3NrYSJ9.wkXlmqP4iyen_MNUv1htwQ&limit=1`;

    request({ url, json: true}, (error, { body }) => { //{body} = response ex-destructuring
        if(error) {
            callback('Unable to connect to location services!', undefined);
        }
        // body.message -> when location is empty string 
        // body.features.length < 1 -> when invalid location is entered ex- 11dsdsind
        else if(body.message || body.features.length === 0) {
            callback('Unable to find location! try Another Location.', undefined);
        }
        else {
            callback(undefined, {
                longitude: body.features[0].center[0],
                latitude: body.features[0].center[1],
                location: body.features[0].place_name
            });
        }
    });
};

module.exports = GeoCode;