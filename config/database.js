const mongoose = require("mongoose")
mongoose.set('strictQuery', true)
const connectDatabase = () => {
    mongoose.connect(process.env.DB_URI,  {useNewUrlParser: true}).then(() => {
        console.log('connect')
    }).catch((err)=>console.log(err))
}
module.exports = connectDatabase;
