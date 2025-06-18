const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://sanskarsonwani:BTPRusTORjqqCIf1@cluster0.vxjr3pa.mongodb.net/");
const todoSchema = mongoose.Schema({
    title : String,
    description : String,
    completed : Boolean

});
const todo = mongoose.model('todos', todoSchema);
module.exports={
    todo
}