const express = require("express");

const app = express();


const mongoose = require('mongoose');

const { port, mongodb_uri } = require('./config/config');
// Use an environment variable if it exists, otherwise default to 3000
const PORT = process.env.PORT || port;

mongoose.connect(mongodb_uri).then(() => {
    console.log("Connected to the database!")
}).catch((err) => console.log(err));

const routes = require('./routes/routes');


app.use(express.json());
app.get('/', (req, res) => {
    res.send("Hello World my whole world");
});

app.use('/api', routes);

app.listen(PORT, () => {
    console.log("Server is listening on PORT" + PORT);
});
