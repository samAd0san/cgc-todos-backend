const express = require('express'); 
const mongoose = require('mongoose');

const homeRoutes = require('./routes/homeRoutes');
const todosRoutes = require('./routes/todosRoutes');

const app = express();
const port = process.env.PORT || 3000;

app.listen(port,() =>{
    console.log(`The port is running of http://localhost:${port}/`);
});

app.use(express.json());
// mongoose.connect('mongodb://localhost:27017/todos-db');
const dbConnect = process.env.dbConStr;
mongoose.connect(dbConnect);
console.log('db Connected');

app.use(homeRoutes);
app.use('/todos',todosRoutes);

app.use((req,res)=>{
    res.status(404).send('Not Found');
})