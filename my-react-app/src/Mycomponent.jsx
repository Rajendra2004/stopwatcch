import React,{useState} from "react"
function Mycomponent(){
    const [name,setName] = useState("Guest");
    const [age,setAge] = useState(0);
    const [comment,setComment] = useState("");

    const [opinion,setOpinion] = useState("");
    const [mode,setMode] = useState("");
    const handleClick = () =>{
    setName("Rajendra");
  

    }

    const handleClickAge = ()=>{
        setAge(age+1);
    }

    function handleChangeComment(event){
        setComment(event.target.value);
    }
    function handleChangeOpinion(event){
        setOpinion(event.target.value);
    }
    function handleChangeMode(event){
        setMode(event.target.value);

    }
    
    return(
        <>
    <p>Name:{name}</p>
   <button onClick = {()=>handleClick(e)} >Set Name</button>
    <p>Age:{age}</p>
    <button onClick = {handleClickAge}>set Age</button>
   <p>comment</p>
    <textarea value={comment} onChange={handleChangeComment} 
    placeholder="write about you"/>
    <p>select what you are intrested</p>
 <select value={opinion} onChange={handleChangeOpinion} >
    <option value="" >select an option</option>
    <option value="Placement">Placement</option>
    <option value="Not intrested">Not intrested</option>

 </select>
 <p>Payment mode</p>
 <label >
    <input type="radio" value="Cash on Delivery" checked={mode=="Cash on Delivery"} onChange={handleChangeMode} /> Cash on Delivery 
     </label>
     <label>
    <input type="radio" value="UPI" checked={mode=="UPI"}onChange={handleChangeMode}  /> UPI
    </label>
    <label>
    <input type="radio" value="Network Banking" checked={mode=="Network Banking"}onChange={handleChangeMode} /> Network Banking
 </label>
    </>);

}
export default Mycomponent