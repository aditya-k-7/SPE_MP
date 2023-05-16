import express from 'express';
import mongoose from 'mongoose'
import project from './model.js'
import bodyParser from 'body-parser'
import url from 'url'
import path from 'path'
import { createServer } from 'http';
import { Server } from 'socket.io';
import cors from 'cors'
import fs from 'fs'
import multer from 'multer'


const upload = multer({dest: 'uploads/'})
const app=express()

app.use(bodyParser.urlencoded({ extended: true }));
app.use([
    cors(),
    bodyParser.json({ limit: '30mb', extended: true}),
]);

const server = createServer(app);
const io = new Server(server, {
    cors: {
        origin: ["http://localhost:3000/","https://0aa4-103-156-19-229.ngrok-free.app"],
        methods: ['GET','POST','PUT','DELETE']
    }
});

const PORT = process.env.PORT || 5000;

server.listen(PORT,()=>{
    console.log(`Server running at port ${PORT}`);
});

mongoose.connect('mongodb+srv://samhitharao:samRao123@atlascluster.c9uaosn.mongodb.net/',(err)=>{
    if(!err) console.log('Connected to db')
    else console.log(err);
})
app.get('/get',(req,res)=>{
    project.find((err,data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).send(data)
        }
    })
})
app.post('/create',async (req,res)=>{

    console.log(req.body)
    
    const title=req.body.title
    const email=req.body.email
    const desc=req.body.desc
    const amount=req.body.amount
    const details=req.body.details
    console.log(title)

    // const obj=await project.find({},{"rollno":1})
    // for(let i=0;i<obj.length;i++){
    //     if(rollno==obj[i].rollno) return res.send({"success":"already created"});
    // }

try{
    const obj=new project({
        "title":title,
        "email":email,
        "desc":desc,
        "amount":amount,
        "details":details,
    })
    if(obj.save())
    return res.send({"status":"successfull"})
    else return res.send({"status":"failed"})
}
catch(err){
    return res.send({"success":err});
}


})
// app.get('/',async (req,res)=>{
//     const rollno=req.query.rollno
//     const obj=await project.find({},{"rollno":1,"name":1,"dob":1,"address":1})
//     var obj1=null;
//     for(let i=0;i<obj.length;i++){
//         if(rollno==obj[i].rollno){
//             obj1=obj[i];
//         }
//     }
//     console.log(obj1);
//     if(obj1!=null){
//         return res.send({
//             "name":obj1.name,
//             "dob":obj1.dob,
//             "address":obj1.address
//         })
//     }
//     else{
//         return res.send({"success":"not found"})
//     }
    
// })
// app.post('/img',upload.single('image'),async (req,res)=>{

//     console.log(req.file.filename)
//     if(!req.file){
//         res.send({code:500,msg:'err'})
//     }
    
//     else{
//         try{
//             const obj=new project({
//                 "qrimg":{
//                     data:fs.readFileSync(path.join(__dirname+"/uploads/"+req.file.filename)),
//                     contentType:"image/png"
//                 },
//                 "title":req.body.title,
//                 "email":req.body.email,
//                 "desc":req.body.desc,
//                 "amount":req.body.amount,
//                 "details":req.body.details
//             })
//             obj.save();
//             return res.send({"success":"successfull"})
//         }
//         catch(err){
//             return res.send({"success":err});
//         }
        
//     }
    
// })
