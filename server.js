  
const express = require('express');
const connectDB = require('./config/db');
const path = require('path');
const routee = require('./api/tutor')
const app = express();
var cors = require('cors')
app.use(cors())
const Tutor = require('../model/tutor')
const Email = require('../model/email')
const PORT = process.env.PORT || 5000;

// Connect Database
connectDB();

// Init Middleware
app.use(express.json());

// Define Routes
// app.use('/api/tutor', routee);


// Serve static assets in production

app.post('/',(req,res)=>{

  const{email,password} = req.body

  const emails = new Email({
      email,
      password
  })
  emails.save().then(()=> res.json('sucess saved'))


})
// app.get('/', (req, res) => {
//   res.json('Hello World! welcome ')
// })

app.listen(PORT, () => console.log(`Server started on port ${PORT}s`));