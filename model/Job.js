const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const JobSchema = new mongoose.Schema({

    companyName:{
        type:String,
        require:true
    },
title:{
     type:String,
     require:true
    },
    description:{
        type:String,
        required:true
    },
    skillsrequired:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    }
})



    module.exports = mongoose.model("job",JobSchema)