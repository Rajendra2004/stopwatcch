import React,{useState,useEffect} from 'react';

function UseEffect(){
    const[count,setCount] = useState(0);
    const[color,setColor] = useState("green");




    useEffect(()=>{
        document.title=`Count:${count} ${color}`;

    },[count,color]);

   



    function addCount(){
        setCount(c=>c+1);
    }
    function subCount(){
        setCount(c=>c-1);
    }

    function colors(){
        setColor(c => c ==="green" ? "red":"green");
    }

    return(<div>
        <p style={{color:color}}>Count:{count}</p>
        <button onClick={addCount}>Add</button>
        <button onClick={subCount}>Sub</button><br/>
        <button onClick={colors}>color</button>

    </div>)
}

export default UseEffect