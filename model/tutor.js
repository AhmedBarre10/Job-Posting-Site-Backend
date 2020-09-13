const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const TutorSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required:true,

    },
    lastName:{
        type: String,
        required:true,
    },
    subjects:{
        type:String,
         required: true

    },

    profileimage:{
        type:String,
        default:"https://www.cmcaindia.org/wp-content/uploads/2015/11/default-profile-picture-gmail-2.png",
        
        
    }

})

module.exports = mongoose.model('tutor', TutorSchema);
