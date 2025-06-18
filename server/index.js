const express = require("express");
const bodyParser = require('body-parser');
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const app = express();
const port = 3002

app.use(express.json());

app.get("/todos",async (req, res)=>{
    const todos = await todo.find({});
    res.json({
        todos
    })
});

app.post("/todo",async (req, res)=>{
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg : "You send wrong inputs"
        })
        return;
    }
   await todo.create({
        title : createPayload.title,
        description : createPayload.description,
        completed : false
    })
    res.json({
        msg : "Todo created"
    })
    
});

app.put("/completed",async (req,res)=>{
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg : "You send wrong inputs"
        })
    }
   await todo.findByIdAndUpdate({
    _id : updatePayload.id
    } , {
      completed : true  
    })

    res.json({
        msg: "done"
    })
})

app.listen(port, ()=>{
    console.log(`listening to port ${port}.`);
});