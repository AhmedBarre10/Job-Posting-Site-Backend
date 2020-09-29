const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const auth = require('../middleware/auth');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');

const User = require('../model/User');
const Job  = require('../model/Job')

router.get('/',(req,res)=>{
    
    Job.find().then(jobs=>{
        res.json(jobs)
    })
})
router.get('/:id',(req,res)=>{
    Job.findById(req.params.id).then(jobs=>{
        res.json(jobs)
    })
})
router.post('/',[
check('title','title is required').not().isEmpty(),
check('description',"description is required").not().isEmpty(),
check('skillsrequired', "skills required").not().isEmpty(),
check('location','location is required').not().isEmpty()
],async (req,res)=>{
    const{title , description , skillsrequired , location , email , companyName} = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

try{
     job = new Job({
        title,
        companyName,
        description,
        skillsrequired,
        location,
        email
    })
    await job.save()
    .then(ress=>{
        res.json(ress)
    })
}
catch{

}

})


module.exports = router;