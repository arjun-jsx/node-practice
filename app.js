const express = require('express')
const mongoose = require('mongoose')

//Dev--dependency
const dotenv = require('dotenv')
const morgan = require('morgan')

//Controllers
const tourRouter = require('./routes/tourRouter')
 
//Database
const DATABASE = process.env.DATABASE.replace('<password>',process.env.DATABASE_PASSWORD)

mongoose
.connect(DATABASE).then(con => {
// .connect(process.env.DATABASE_LOCAL).then(con => {
 console.log('Database connected successfull ✅')
}).catch(err => {
    console.log('Database connection Fail 💥')
})

const app = express()
if (process.env.NODE_ENV === 'development')  
app.use(morgan('dev'))

app.use(express.json())
app.use('/api/tours',tourRouter)

module.exports = app;













// const {MongoClient} = require('mongodb')


// // Connection URL
//  const url = process.env.DBURL.replace('<password>',process.env.DBPASSWORD)
//  const dbName = process.env.DBNAME

// const client = new MongoClient(url)

// async function connectToDb(){
// await client.connect()
// console.log('Connected successfully to server');
// const db = client.db(dbName)
// const colection = db.collection('contacts')
// colection.findOne({email:'maeva.wilson@example.com'})
// .then(res=>console.log(res))
// .catch(err=>console.log(err))
// return "Done"
// }
// connectToDb().then(res=>console.log(res)).catch(err=>console.log(err))

 








