import React,{useState} from 'react'
function updateArrayObjectsInState(){
const [foods,setFoods] = useState(["Apple","banana","Orange","Grapes"]);

function handleAdd(){

const Newfood = document.getElementById("foodInput").value;
document.getElementById("foodInput").value=" ";

setFoods(foods => [...foods, Newfood]);
}
function handleRemove(index){
setFoods(foods.filter((_,i)=>i!==index));
}
return(<div>
    <h2>List of Food</h2>
    <ul>
        {foods.map((food,index)=>
        <li key={index} onClick={() => handleRemove(index)}>
            {food}
            </li>)}
    </ul>
    <input type="text" id="foodInput" placeholder="enter a food name"/><br/><p></p>
    <button onClick={handleAdd}>Add Food</button>
</div>);
}
