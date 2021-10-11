const mongoose=require("mongoose");


const ReviewSchema= new mongoose.Schema({

title : {
     type: String,
    required:[true, "please add name of the review" ],
    unique:true,
    trim:true,
    maxlength: [100, "Review title cannot be higher than 100 charachters"]
},
slug: String,
description: {
    type: String,
    required:[true, "description cannot be empty"],
    
},
author: {
    type: String,
    unique:true,
    required:[true, "a review needs an author"]
},
rating: {
    type:String,
    required:true,
    enum: [
        "positive",
        "negative",
        "average"
    ]

},
createdAt : {
    type:Date,
    default:Date.now
}


});




module.exports= mongoose.model("Reviews", ReviewSchema); 