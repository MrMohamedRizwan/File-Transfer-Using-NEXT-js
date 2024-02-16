const express = require('express');
const dotenv = require('dotenv');
// const {chats} = require('./data/data.js');
const cors = require('cors'); // Import cors middleware



// Apply cors middleware globally

const connectToDB = require('./config/db.js');
const color=require('colors');
const UserRoutes  = require('./routes/UserRoutes.js');
const {notFound, errorHandler} = require('./Middlewares/errorMiddleware.js');

dotenv.config();
connectToDB();

const app = express();
app.use(cors());

app.use(express.json());
const port = process.env.PORT || 5000;
app.get('/', (req, res) => {
  res.send('Hello World');
});


app.use('/api/user',UserRoutes)

app.use(notFound);
app.use(errorHandler)
app.listen(port, () => console.log(`Server running on port ${port}`.yellow.bold));
