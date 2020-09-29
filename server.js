  
const express = require('express');
const connectDB = require('./config/db');
const path = require('path');
const app = express();
const auth = require("./middleware/auth")
var cors = require('cors')
app.use(cors())
const PORT = process.env.PORT || 5000;

// Connect Database
connectDB();

// Init Middleware
app.use(express.json());
app.get("/", express.static(path.join(__dirname, "./public")));

// Define Routes
app.use('/api/StudentSignUp', require('./api/StudentSignUp'));
app.use('/api/StudentLogin', require('./api/StudentLogin'));
app.use('/api/Jobs', require('./api/Jobs'));





// Serve static assets in production


// app.get('/', (req, res) => {
//   res.json('Hello World! welcome ')
// })

app.listen(PORT, () => console.log(`Server started on port ${PORT}s`));