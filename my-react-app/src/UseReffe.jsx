import React,{useState,useEffect,useRef} from 'react';
function UseReffe(){
const inputref = useRef(null);

useEffect(()=>{
   console.log("Component re-rendering"); 
});
function handleClick(){
    inputref.current.focus();
    inputref.current.style.backgroundColor = "yellow";
}
return(<div>
    <button onClick={handleClick}>Click me</button>
    <input ref = {inputref}/>
</div>);


}
export default UseReffe