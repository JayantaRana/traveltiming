
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const busRoutes = require('./routes/busRoutes');
const cors = require('cors');//edit
const app = express();
const port = process.env.PORT || 4000;//edit
require('dotenv').config();
app.use(cors({ origin: 'https://traveltiming.vercel.app' }));//edit
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

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});//new add

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
