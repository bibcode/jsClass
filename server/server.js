const express = require('express');
const User = require('./class');

const app =express();

app.get('/',(req,res)=>{
    console.log('Thank you for using our server');
    res.send('Thank you for using our server')
})

app.get('/users',(req,res)=>{
    console.log('Getting users'); 
    const users =[new User('Ibrahim', 10),new User('Aisha',5,'Female')];
    res.send(users);
})

app.listen(3000, ()=>{
    console.log('Congratulation you have created a server');
})

