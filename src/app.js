const express=require('express');
require('./db/conn');
const app=express();
const studentRouter=require('./routers/students');

const port= process.env.PORT || 8000;

app.use(express.json());
app.use(studentRouter);

app.listen(port,()=>{
    console.log("connection established");
});













