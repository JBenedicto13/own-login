const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

const UsersModel = require("./models/Users");
const Users = require("./models/Users");

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

mongoose.connect('mongodb+srv://jbenedictodb:Vw65ZvaulbsXfDwC@cluster0.jozgp08.mongodb.net/food?retryWrites=true&w=majority', {
    useNewUrlParser: true,
});

app.post('/insert', async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const users = new UsersModel(
        {
            email: email,
            password: password
        }
    );
    try {
        await users.save();
        res.send("inserted data");
    } catch (err) {
        console.log(err)
    }
})

app.get('/read', async (req, res) => {
    UsersModel.find({}, (err, result) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(result);
        }
    } )
})

app.get('/', (req, res) => {
    res.send("Express is here.");
})

app.listen(3001, () => {
    console.log("Listening on port 3001 . . .");
})