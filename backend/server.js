const express = require('express');
const dotenv = require('dotenv');
const chats = require('./data/data');
const connectDB = require('./config/db');
const colors = require('colors');
const userRoutes = require('./routes/userRoutes');
const chatRoutes = require('./routes/chatRoutes');
const messagesRoutes = require('./routes/messagesRoutes');
const { errorHandler, notFound } = require('./middleware/errorMiddlewere');


const app = express();
app.use(express.json());
dotenv.config();
connectDB()
app.get("/", (req, res) => {
    res.send("Api is Running")
})


app.use('/api/user', userRoutes)
app.use('/api/chat', chatRoutes)
app.use('/api/message', messagesRoutes)

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server is running on ${PORT}`.bgGreen.bold));