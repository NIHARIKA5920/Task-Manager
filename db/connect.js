const mongoose = require('mongoose')


const connectDB=(url)=>{
    mongoose.connect(url,{
        useNewUrlParser:true,
        useCreateIndex:true,
        useFindAndodify:false,
        useUnifiedTopology:true,
    })
}


module.exports=connectDB
// .then(()=>console.log('connected to the db..'))
// .catch((err)=>console.log(err))

