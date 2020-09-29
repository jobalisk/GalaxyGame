const express = require("express");
const app = express();
const port = 3000;


const bodyParser = require('body-parser');
const cors = require("cors");

app.use(cors())
app.use(bodyParser.json())



const API = require("./api/api");

app.use("/api", API());


app.listen(port, () => console.log(`Galaxy Game server starting on port ${port}!`));