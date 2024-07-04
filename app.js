const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path=require('path');


const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/todoapp", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const appSchema = new mongoose.Schema({
  name: String,
});

const AppData = mongoose.model("AppData", appSchema);

app.listen(3000, function() {
  console.log("Server is running on port 3000");
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'app.html'));
  res.send("found");
});

app.get('/app', async (req, res) => {
  try {
    const foundData = await AppData.find();
    res.send(foundData);
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
});

app.post('/app', async (req, res) => {
  try {
    const newAppData = new AppData({
      name: req.body.name,
    });
    await newAppData.save();
    res.send("Data saved successfully");
  } catch (err) {
    res.status(503).send("Service Unavailable");
  }
});
app.delete('/app',async(req,res)=>{
  try{
await AppData.deleteMany({});
res.send("all data dlt succ");      
    }catch(err){
      res.status(500).send("intenal err");
}    });



module.exports = app;


