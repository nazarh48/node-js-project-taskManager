const mongoose = require('mongoose')


const connectDB = (url)=>{
    mongoose.connect(url,{
        // to remove depreciation shown due to database
         useNewUrlParser:true,
         useCreateIndex:true,
         useFindAndModify:false,
         useUnifiedTopology:true,
    })
    //----------USED FOR MESSAGE THAT CONNECTION SUCCESS OR NOT----------
    // .then(()=>console.log('connected to DB'))
    // .catch((err)=>console.log(err))
}

module.exports = connectDB
