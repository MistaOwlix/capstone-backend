const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require("cors");
require('dotenv').config();

//App
const app = express();

// Database Connection
mongoose
  .connect(process.env.MONGO_URI, {
   useNewUrlParser: true,
   useUnifiedTopology: true,
})
.then(() => console.log('Connected to the database'))
.catch((err) => console.error('Error connecting to the database:', err));

//middleware
app.use(morgan("dev"));
app.use(cors({origin: true, credentials: true})); 

//routes
const testRoutes = require("./routes/test");
app.use("/", testRoutes);

//port
const port = process.env.PORT || 8080;

//listener
const server = app.listen(port, () => 
  console.log(`Server is running on port ${port}`)
);

