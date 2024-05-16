const express = require('express'); 
const mongoose = require('mongoose');
const cors = require('cors');

const homeRoutes = require('./routes/homeRoutes');
const todosRoutes = require('./routes/todosRoutes');

const app = express();
const port = process.env.PORT || 3000;

app.listen(port,() =>{
    console.log(`The port is running of http://localhost:${port}/`);
});

// app.use(cors({ origin: 'http://localhost:5173'}));
app.use(cors());

app.use(express.json());
// mongoose.connect('mongodb://localhost:27017/todos-db');
const dbConnect = process.env.dbConStr || 'mongodb+srv://admin:admin@samadscluster.a4s9jvf.mongodb.net/';
mongoose.connect(dbConnect);
console.log('db Connected');

app.use(homeRoutes);
app.use('/todos',todosRoutes);

app.use((req,res)=>{
    res.status(404).send('Not Found');
})