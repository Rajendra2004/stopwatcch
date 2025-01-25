import React,{useState} from 'react'

function ToDoList(){
const [tasks,setTasks] = useState(["Eat BreakFast","Take A shower","walk a dog"]);
const [newTask,setNewTask] = useState("");

function handleInputChange(event){
   setNewTask(event.target.value);
}
function AddTask(){
    if(newTask.trim() !== " "){
        setTasks(t => [...t,newTask]);
        setNewTask("");

    }

}
function deleteTask(index){
    const updatedTasks=tasks.filter((_,i) => i !== index);
     setTasks(updatedTasks);
}
function MoveTaskUp(index){

    if(index > 0){
        const updatedTasks = [...tasks];
        [updatedTasks[index],updatedTasks[index - 1]] = 
        [updatedTasks[index - 1],updatedTasks[index]];
        setTasks(updatedTasks);
    }
}
function MoveTaskDown(index){
    if(index < tasks.length - 1){
        const updatedTasks = [...tasks];
        [updatedTasks[index],updatedTasks[index + 1]] = 
        [updatedTasks[index + 1],updatedTasks[index]];
        setTasks(updatedTasks);
    }
}
return(<div className="to-do-list">
    <h1>To-Do-List</h1>
    <div>
        <input type='text' placeholder="Enter a task..?" value={newTask} onChange={handleInputChange}/>
        <button className='add-button' onClick={AddTask}>Add Task</button>
    </div>
    <ol>
        {tasks.map((task,index) => 
        <li key={index}>
        <span className='text'>{task}</span>
        <button className='delete-button' onClick={()=>deleteTask(index)}>Delete</button>
        <button className='up-button' onClick={()=>MoveTaskUp(index)}>&#x2191;</button>
        <button className='down-button' onClick={()=>MoveTaskDown(index)}>&#x2193;</button>
       
       
        </li>
    )}
    </ol>
</div>);
}
export default ToDoList