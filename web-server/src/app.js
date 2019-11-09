const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();

// Define paths for Express config
const viewsPath = path.join(__dirname, '../templates/views');
const publicDirectoryPath = path.join(__dirname, '../public');
const partialsPath = path.join(__dirname, '../templates/partials');

// Setup handlebars engine and 'views' location and partial
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));   
//index will be referred automatically for homepage as index.html has a special meaning to the servers

app.get('', (req, res) => {
    res.render('index', {       //(./views/index.hbs) -full path is not required as views is the default folder to hbs file 
        title: 'Weather',
        name: 'LaDav'
    });     
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About me!',
        name: 'LaDav' 
    });
});

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help!',
        helpText: 'this is some helpfull text...',
        name: 'LaDav'
    });
});

app.get('/weather', (req, res) => {
    res.send({          // data will be send in JSON format automatically
        forecast: 55,
        location: `new Delhi, India`
    });
});

app.get('/products', (req, res) => {
    if(!req.query.location) {
        return res.send({
             error: 'location is required.'
        });
    }

    res.send({
        product: 'this the product name!'
    });
});

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        errorMessage: 'help article not found!',
        name: 'LaDav' 
    });
});

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        errorMessage: 'Page not found!',
        name: 'LaDav' 
    });
});

app.listen(3000, () => {
    console.log('server started successfully!');
});