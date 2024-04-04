const express = require('express');

const app = express();
const port = 4000;
app.set('view engine','ejs');
app.use(express.urlencoded({extended:true}));


let tasks =[];

app.get('/addtask',(req,res)=>{
    res.render('addtask');
})

app.post('/addtask',(req,res)=>{
    const task = req.body.task;
    tasks.push(task);
    res.redirect('/');
})

app.get('/',(req,res)=>{
    res.render('index',{tasks:tasks});
})

app.post('/deletetask',(req,res)=>{
    const index = req.body.index;
    tasks.splice(index,1);
    res.redirect('/');
})


app.listen(port,()=>{
    console.log(`server is running on ${port} successfully`)
})
