let data= [
    {name:"Intrasteller", genre:"science fiction"},
    {name:"Arthur", genre:"mythology"},
    {name:"The Dark Knight", genre:"drama"}
]

exports.getReviews=(req,res,next)=> {
    res.status(200).json({success:true, data:data})
}

exports.postReview=(req,res,next)=> {
    res.status(200).json({success:true, message:"your movie review is created"})
}

exports.getReview=(req,res,next)=> {
    res.status(200).json({success:true, message:`your movie review ${req.params.id}`})
}

exports.updateReview=(req,res,next)=> {
    res.status(200).json({success:true, message:`your movie review ${req.params.id} is updated`})
}

exports.deleteReview=(req,res,next)=> {
    res.status(200).json({success:true, message:`your movie review ${req.params.id} is deleted`})
}