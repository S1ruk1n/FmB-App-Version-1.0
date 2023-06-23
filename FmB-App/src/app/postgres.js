const express = require("express");
const bankenRoutes = require('./routes');
const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) =>{
    res.send("Hello world!")
});

app.use( "/api/v1/banken", bankenRoutes);

app.listen(port, () => console.log(`App listening on port ${port}`));


