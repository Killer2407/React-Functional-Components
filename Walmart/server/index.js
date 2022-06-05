const express = require("express")
const cors = require('cors');
const data = require('./mockData/data.json');
const fs = require('fs');
console.log(data);

const PORT = 8000;
const app = express();
app.use(cors());
app.use(express.json());

app.get("/getNotes", function routeHandler(req, res) {
    console.log('req',req)
    res.send(data);
});

app.post("/addNote", function routeHandler(req, res) {
    let note = req.body;
    writeData = data;
    note.id = writeData.data.length +1;
    console.log('note',note);
    writeData.data.push(note);
    const stringData = JSON.stringify(writeData);
    console.log('sD',stringData);
    fs.writeFile('./mockData/data.json',JSON.stringify(writeData),(err)=>{
        if(err){
            console.error(err)
        }
        console.log('saved');
    });
    res.send(note);
});

app.delete("./deleteNote/:id", function routeHandler(req, res) {
    const { id } = req.params;
    deleted = data.find(data => data.id === id);
    if (deleted) {
        data = data.filter(data => data.id !== id);
    }
})


app.listen(PORT, () => {
    console.log(`server is running in on port : ${PORT}`);
  });
