const express = require('express');

const bodyParser = require('body-parser');

const userRouter = require('./routes/users');

const app = express();

app.use(bodyParser.json());

app.use('/users' , userRouter);
app.use('/users' , userRouter);
app.get('/' , (req , res)=>{

    console.log('Hello from home page');
    res.send('Hello from home page');
});

app.listen(2020);