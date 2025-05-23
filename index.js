
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const DOTENV = require('dotenv');
const Firmrouter = require('./Router/FirmRoutes')
const productRoute = require('./Router/productRoute');
const path = require('path')


const app = express();
const VenderRote = require('./Router/VendoerRoute');




app.use(bodyParser.json());
DOTENV.config()
app.use(cors());
mongoose.connect(process.env.MongoDB_URL)
  .then(() => {
    console.log("MongoDB is Connected");
  })
  .catch((err) => {
    console.error("MongoDB connection failed:", err);
  });

app.use("/Vender", VenderRote);
app.use('/Firm', Firmrouter);
app.use('/Product', productRoute);
app.use('/uploads' , express.static('uploads'))

const PORT = process.env.PORT || 6060;
app.listen(PORT, () => {
    console.log(`Successfully connected on port ${PORT}`);
});

app.use('/home', (req, res) => {
    res.send("<h1>I LOVE YOU CHINNAGA</h1>");
});
