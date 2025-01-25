import React,{useState,useEffect} from 'react';

function UseEffectEx(){
    const [width,setwidth] = useState(window.innerWidth);
    const [height,setheight] = useState(window.innerHeight);

    useEffect(()=>{
        window.addEventListener("resize",handlesize);
        console.log("added");
        document.title = `width:${width} ${height}`;

        return () => {
            window.removeEventListener("resize",handlesize);
            console.log("remove");
        }

    },[width,height]);

    function handlesize(){
        setwidth(window.innerWidth);
        setheight(window.innerHeight);

    }

    return(<>
    <p>window width:{width}</p>
    <p>window height:{height}</p>
    </>)
  
}
export default UseEffectEx