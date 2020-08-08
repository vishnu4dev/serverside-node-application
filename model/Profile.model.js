const mongoose = require('mongoose');

const UserProfile = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    name:{
        type:String,
        required:true,
    },
    company:{
        type:String
    },
    skill:{
        type:[String],
        required:true,
    },
    education:[
        {
            title:{
                type:String,
                required:true,
            },
            nameOfInstitution:{
                type:String,
                required:true,
            },
            year:{
                type:String,
                required:true,
            }
        }
    ],
    expr:[
        {
            role:{
                type:String,
                required:true
            },
            totalPeriod:{
                type:String,
                required:true
            },
            companyName:{
                type:String,
                required:true
            },
        }
    ],
    location:{
        type:String,
        required:true
    },
    socialMedia:[
        {
            gitHubUrl:{
                type:String,
                required:true
            },
            linkedIn:{
                type:String,
                required:true
            },
            mailId:{
                type:String,
                required:true
            },
        }
    ],
    address:{
        type:String,
        required:true,
    },
    phoneNumber:{
        type:Number,
        required:true
    },
});

module.exports =  mongoose.model('profile',UserProfile)