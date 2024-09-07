const express = require('express');
const User = require('./class');
const port = 3000;

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
    const file ='server/Js-for-kids.pdf';
    res.download(file,(err)=>{
        if (err) {
            console.log('Error downloading the file:',err);
            res.status(500).send('Error downloading the file');
        } else {
            console.log('Download successful');
            
        }
    })
    
})


app.delete("/delete", (req, res) => {
    console.log("DELETE REQUEST SUCCESSFUL");
    res.send('User deleted')
})


app.listen(port, ()=>{
    console.log('Congratulation you have created a server');
})
//8C52FF

//The HTTP OPTIONS method requests permitted communication options for a given URL or server.