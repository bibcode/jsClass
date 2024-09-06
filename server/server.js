const express = require('express');
const User = require('./class');
const port = 4000;

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


app.get('/download',(req,res)=>{
    console.log('Loading download content');
    res.download('Js-for-kids.pdf',console.error())
    res.send('Downloading your content')
    
})


app.delete("/delete", (req, res) => {
    console.log("DELETE REQUEST SUCCESSFUL");
    const user= User();
    // console.log(req.body);
    // res._destroy(user);
})


app.listen(port, ()=>{
    console.log('Congratulation you have created a server');
})
//8C52FF

//The HTTP OPTIONS method requests permitted communication options for a given URL or server.