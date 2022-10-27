const express = require('express');

const app = express();

const cors = require('cors');
app.use(cors());

const port = process.env.PORT || 5000;

// const courses = require('./data/courses.json')
const courses = require('./data/info.json')

app.get('/', (req, res) => {
    res.send('This is hitting the root folder of assignment 10 server')
})

app.get('/courses', (req, res) => {
    res.send(courses)
})

app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const course = courses.find(cs => cs.id == id);
    res.send(course)
})

app.get('/checkout/:id', (req, res) => {
    const id = req.params.id;
    const course = courses.find(cs => cs.id == id);
    res.send(course)
})



app.listen(port, () => {
    console.log('assignment 10 server is running on port', port)
})

