const dotenv = require('dotenv')
dotenv.config({path:"./config.env"})
const  app = require('./app')

const PORT = process.env.PORT || 3297


app.listen(PORT,()=>{
    console.log(`server is running on ${PORT} ✅`)
})
 