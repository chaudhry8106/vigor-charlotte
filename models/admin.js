const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const adminSchema = new Schema({
    login_name: {
        type: String,
        required: true,
    },
    login_pass: {
        type: String,
        required: true
    },
    salt: {
        type: String,
    },
    session: {
        type: String
    }
});
const Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin;