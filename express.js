const express = require('express');
const app = express();
const port = 3000;

// Set EJS as the view engine for Express
app.set('view engine', 'ejs'); 

// Define a route handler for GET requests to the root URL
app.get('/', (req, res) => {
    // Render the 'index.ejs' view and send it as the response
    const languages = [
        {name: 'JavaScript', rating: 9.5, popularity: 9.7, type: 'Frontend'},
        {name: 'Python', rating: 9.5, popularity: 9.6, type: 'Backend'},
        {name: 'Java', rating: 9.2, popularity: 9.0, type: 'Backend'},
    ];
    
    res.render('index', {languages});

});

// Define a route handler for GET requests to '/example', action when user access /example
app.get('/example', (req, res) => {
    // Extract 'name' and 'age' from the query string
    let {name, age} = req.query;

    // Render the 'response.ejs' view, passing 'name' and 'age' as variables
    // to the view, and send it as the response
    res.render('response', {name, age});
});





app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

app.use((req,res,next) => {
    next();
});

app.use((req,res,next) => {
    console.log('going 2nd middleware')
    next();
});

app.use(express.static('public'));



app.get('/cart/:job', (req, res) => {
    console.log(req.params);
});

app.get('/cart', (req, res) => {
    console.log('long said: cart');
    res.send('long said: cart');
});

app.get('*', (req, res) => {
    res.status(404).send('long said: Page not found');
});

app.get('/express', (req, res) => {
    res.status(200).send('Hello Express!');
    res.redirect('/cart');
});

app.get('/express/:id', (req, res) => {
    console.log(req.params);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});