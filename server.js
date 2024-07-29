
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const busRoutes = require('./routes/busRoutes');
const cors = require('cors');//new add
const app = express();
// const port = 4000;//edit
const port = process.env.PORT || 4000;
require('dotenv').config();
app.use(cors({ origin: 'https://traveltiming.vercel.app' }));//new add
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB Atlas');
});

app.use('/api', busRoutes);//edit



app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
