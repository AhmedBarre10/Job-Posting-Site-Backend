const express = require('express');
const router = express.Router();
const Tutor = require('../model/tutor')
const Email = require('../model/email')

router.get('/',(req,res)=>{
 Tutor.find().then(tutors=>{
     res.json(tutors)
 })
 .catch(err=> res.json(err))
})

router.post('/email',(req,res)=>{

    const{email,password} = req.body

    const emails = new Email({
        email,
        password
    })
    emails.save().then(()=> res.json('sucess saved'))


})

router.get('/email',(req,res)=>{
    Email.find().then(info =>{
        res.json(info)
    })
})
router.get('/',(req,res)=>{
    res.json('welcome')
})

router.get('/:id',(req,res)=>{
    Tutor.findById(req.params.id).then(ress=>{
        res.json(ress)
    })
})


router.post('/', (req,res)=>{
    const {firstName, subjects, lastName ,profileimage }  = req.body;
    const tutor = new Tutor({
        firstName,
        lastName,
        subjects,
        profileimage
    })
tutor.save().then(()=>res.json('sucess it worked'))
.catch(err=> res.json(err))
})
module.exports = router;
