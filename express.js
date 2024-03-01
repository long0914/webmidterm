const { Console } = require('console');
const express = require('express');
const { ppid } = require('process');
const app = express();
const port = 3000;

app.use(express.json()); //middleware added before any route is defined
app.use(express.urlencoded({ extended: true })); 


app.get('/', (req, res) => {
    res.status(200).send('Hello World!');
});


app.get('/cart/:job', (req, res) => {
    onsole.log(req.params);
  
});

app.get('/cart', (req, res) => {
    // Use the fs module to check if the file exists
  Console.log('long said: cart');
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



app.get('/example', (req, res) => {
    let obj = {
        name: "John",
        age: 30,
        city: "New York"
    };
    res.status(200).json(obj);
});


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

app.get('*', (req, res) => {
    res.status(404).send('long said: Page not found');
});// response to any request that doesn't match the ones above
