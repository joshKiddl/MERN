//import modules
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();

//app
const app = express();

//db
mongoose.
    connect(process.env.MONGO_URI, {
        useNewURLParser: true,
        useUnifiedTopology: true,
    })
.then(() => console.log('DB connected')).catch(err => console.log('DB connection error', err))

//middleware
app.use(morgan("dev"));
app.use(cors({origin: true, credentials: true}));

//routes
const testRoutes = require('./routes/test')
app.use('/', testRoutes);

//ports
const port = process.env.PORT || 8080;

//listener
const server = app.listen(port, () => console.log('server is running on port'))