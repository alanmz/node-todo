var moongoose=require('mongoose');
var User=moongoose.model('User',{
    email:{
        type:String,
        required:true,
        trim:true,
        minlength:1
    }
});

module.exports={User};
