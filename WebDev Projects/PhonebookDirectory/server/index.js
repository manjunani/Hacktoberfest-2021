const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const friendModel = require('./models/Friends');


app.use(express.json());
app.use(cors());

// Connecting database
mongoose.connect(`mongodb://localhost:27017/trandocrud?readPreference=primary&appname=MongoDB%20Compass&ssl=false
`,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {console.log('Connected to database')}).catch((err) => {console.log(err)});

// create
app.post('/create', async (req, res)=>{
    const name = req.body.name;
    const phone = req.body.phone;
    const friend = new friendModel({
        name: name,
        phone: phone
    });
    await friend.save();
    res.send(friend).status(200);
});

// read
app.get('/read', async (req, res)=>{
    friendModel.find({}, (err, friends)=>{
        if(err) res.send(err).status(500);
        res.send(friends).status(200);
    });
});

//update
app.put('/update', async (req, res)=>{
    const id = req.body.id;
    const newPhone = req.body.newPhone;
    try{
        await friendModel.findById(id, (err, friendToUpdate)=>{
            friendToUpdate.phone = Number(newPhone);
            friendToUpdate.save();
        });
    }catch(err){
        res.send(err).status(500);
    }
    res.send("Updated Successfully").status(200);
});

//delete
app.delete("/delete/:id", async(req, res)=>{
    const id = req.params.id;
    await friendModel.findByIdAndRemove(id).exec();
    res.send("Item Deleted");
})

app.listen(3001,()=>{
    console.log('Listening on port 3001');
});