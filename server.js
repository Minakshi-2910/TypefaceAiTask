const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const dotenv = require('dotenv')
const colors = require('colors');
const connectDb = require('./config/connectDb');

dotenv.config();
connectDb();



//rest object
const app = express()

//middlewares
app.use(cors())
app.use(morgan())
app.use(express.json())

//routes
app.use('/api/v1/users', require('./routes/userRoute'))

app.use('/api/v1/transactions', require('./routes/transactionRoutes'));

//port
const PORT = 8080 || process.env.PORT
//listen
app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
})