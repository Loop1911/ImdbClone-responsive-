require("dotenv").config();
require("./dbConnect");
const mongoose = require("mongoose");
const movie = require("./Models/Movie");
const express = require("express");

const cors = require("cors")  ;  
const app = express();
const movieRoutes = require("./routes/Movies");
 




const port = 5000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/your-database-name', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(port, () => {
      console.log(`Server started on port ${port}`);
    });
  })
  .catch((err) => console.error('Error connecting to MongoDB:', err));

app.use(express.json());

// Use your routes
app.use('/api', movieRoutes);
