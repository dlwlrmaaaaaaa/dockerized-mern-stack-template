const express = require("express");

const app = express();

// Use an environment variable if it exists, otherwise default to 3000
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send("Hello World my whole world!!!");
});

app.listen(PORT, () => {
    console.log("Server is listening on PORT" + PORT);
});
