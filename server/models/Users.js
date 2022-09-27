const mongoose = require("mongoose");

const UsersSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }, 
});

const Users = mongoose.model("UserData", UsersSchema);
module.exports = Users;