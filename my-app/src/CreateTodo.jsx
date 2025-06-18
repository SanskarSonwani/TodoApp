import { useState } from "react";

export function CreateTodo(){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    return<div>
        <input style={{
            margin : 10,
            padding: 10
        }
        } type="text" placeholder="Title" onChange={function(e){
            const value = e.target.value;
            setTitle(value);
        }}></input> <br/>
        <input style={{
            margin : 10,
            padding : 10
        }} type="text" placeholder="Description" onChange={function(e){
            setDescription(e.target.value);
        }}></input><br/>
        <button onClick={()=>{
            fetch("http://localhost:3002/todo",{
                method : "POST",
                body : JSON.stringify({
                    title: title,
                    description : description
                }),
                headers : {
                    "content-type" : "application/json"
                }
            }).then(async function(res){
                const json = await res.json();
                alert("Todo Addes");
            })
        }} style={{
            margin :10,
            padding :10
        }}>Add a todo</button>
    </div>

} 