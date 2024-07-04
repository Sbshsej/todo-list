// const express = require('express');
// const bodyParser = require('body-parser');
// const mongoose = require('mongoose');
// const path=require('path');


// const app = express();
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.json());

// mongoose.connect("mongodb://127.0.0.1:27017/todoapp", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const appSchema = new mongoose.Schema({
//   name: String,
// });

// const AppData = mongoose.model("AppData", appSchema);

// app.listen(3000, function() {
//   console.log("Server is running on port 3000");
// });

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname,'app.html'));
//   res.send("found");
// });

// app.get('/app', async (req, res) => {
//   try {
//     const foundData = await AppData.find();
//     res.send(foundData);
//   } catch (err) {
//     res.status(500).send("Internal Server Error");
//   }
// });

// app.post('/app', async (req, res) => {
//   try {
//     const newAppData = new AppData({
//       name: req.body.name,
//     });
//     await newAppData.save();
//     res.send("Data saved successfully");
//   } catch (err) {
//     res.status(503).send("Service Unavailable");
//   }
// });
// app.delete('/app',async(req,res)=>{
//   try{
// await AppData.deleteMany({});
// res.send("all data dlt succ");      
//     }catch(err){
//       res.status(500).send("intenal err");
// }    });



// module.exports = app;




// const express=require('express');
// const mongoose=require('mongoose');
// const bodyParser=require('body-parser');
// const app=express();
// app.use(bodyParser.urlencoded({extended:true}));
// mongoose.connect("mongodb://127.0.0.1:27017/Empdata",{
//    useNewUrlParser: true,
// useUnifiedTopology:true,
// });
// const EmpSchema=new mongoose.Schema({
//   name:String,
// });
// const Empdata=new mongoose.model("empdata",EmpSchema);
// app.listen(3001,function(){
//   console.log("server is runnig on 3001");

// })
// app.get('/',(req,res)=>{
//   res.send("xxxxzz");
// });
// app.get(('Empd',async(req,res)=>{

//   try{
//     const foundEmp=await( Empdata.find());
//     res.send("foundemp");

//   }catch(err){
//     res.status(500).send("err featchign  emp");
//   }
// })
// )
// app.post('/Empd',async(req,res)=>{
//   try{const newEmp=new Empdata({
//     name:req.body.name
//   });
// await newEmp.save();
// res.send("emp data succe");}
// catch(err){
//   res.status(502).send("err");
// }
// })
// app.put('/',(req,res)=>{
//   res.send("xxx vv");
// });
// app.put('Empd',async(req,res)=>{
//   try{
//     const adddata=await(Empdata.find());
//     res.send("xvc");
//   }catch(err){
//     res.status(502).send("abcs");
//   }
// }) ;
// app.delete('/',(req,res)=>{
//   res.send("dlt succes");
// });
// app.delete('Empd',async(req,res)=>{
//   try{
//     const deletedata=await(Empdata.findanddelete(req.params.id));
//     res.status(200).send("dlt item succce");
//     }
// })
// nconst express = require("express");
//  const bodyParser = require("body-parser");
//  const mongoose = require("mongoose");

// // const { default: mongoose } = require("mongoose");

//  const app = express();

// //  Use body-parser middleware
//  app.use(bodyParser.urlencoded({ extended: true }));

// // // Define the root route
//  app.get('/', (req, res) => {
//     res.send("seeeeeeee");
// });

// // // Serve static files from the "public" directory
//  app.use(express.static("public"));

// // // Connect to MongoDB
//  mongoose.connect("mongodb://127.0.0.1:27017/xxx", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//  });

// // Define a schema and model
// const itemSchema = new mongoose.Schema({
//     name: String
// });

// const Item = mongoose.model("Item", itemSchema);

// // Insert an item if the collection is empty
// async function insertInitialItem() {
//     try {
//         const foundItem = await Item.findOne({});
//         if (!foundItem) {
//             const item = new Item({ name: "Test Item" });
//             await item.save();
//             console.log("Initial item inserted");
//         } else {
//             console.log("Item already exists");
//         }
//     } catch (err) {
//         console.error("Error inserting initial item:", err);
//     }
// }

// insertInitialItem();

// // Start the server and listen on port 3002
// app.listen(3001, function () {
//     console.log("Server is listening on port 3002");
// });
// const itemSchema =new mongoose.Schema({
//   name:String
// });
// const Item=mongoose.model("Item",itemSchema);
// async function insertInitialItem(){
//           try{
//                     const foundItem =await Item.findOne({});
//                     if(!foundItem){
//                               const item =new item({name:"ttt"});
//                               await item.save();
//                               console.log("vvv");
//                     }else{console.log("aaa")
//                                                   }}  
//                                       catch(err){
//                                         console.log("xx",err);
//                               }
//                     }
// const express = require("express");
// const mongoose = require("mongoose");
// const bodyParser = require("body-parser");

// const app = express();
// app.use(bodyParser.urlencoded({ extended: true }));

// mongoose.connect("mongodb://127.0.0.1:27017/abcd", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });

// const EmpSchema = new mongoose.Schema({
//   name: String,
//   Emp_salary: Number
// });

// const Empdata = mongoose.model("Empdata", EmpSchema);

// app.listen(3001, function () {
//   console.log("Server is listening on port 3001");
// });

// app.get('/', (req, res) => {
//   res.send("Home Page");
// });

// app.get("/Emp", async (req, res) => {
//   try {
//     const foundEmp = await Empdata.find();
//     res.send(foundEmp);
//   } catch (err) {
//     res.status(500).send("Error fetching employees");
//   }
// });

// app.put("/Emp/:name", async (req, res) => {
//   try {
//     await Empdata.updateMany(
//       { name: req.params.name },
//       {
//         name: req.body.name,
//         Emp_salary: req.body.Emp_salary
//       },
//       { overwrite: true }
//     );
//     res.send("Successfully updated");
//   } catch (err) {
//     res.status(500).send("Error updating employee");
//   }
// });

const express=require('express');
const mongoose=require("mongoose");
const bodyParser=require('body-parser');
app.use(bodyParser.urlecoded({extends:true}));

const app=require('express');
mongoose.connect('mongodb/2017017/localhost/',{
  useNewUrlParser:true,
  useUnifiedTopology:true,
});
const Schema=new mongoose.Schema({
  name:String,
});
const Sdata=mongoose.model(Schema,"Sdata");
app.listen(3001,function(){
  console.log("welcoe to the mongo");
});
app.get('/',(req,res)=>{
  res.send("xxxx");

});
app.get("/Sdata",async(req,res)=>{
  try{
    const foundData=await Sdata.find();
    res.send(foundData);

  }catch{
    res.stauts(400).send("err found in new way");

  }
})