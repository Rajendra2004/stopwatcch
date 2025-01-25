import React,{useState,useEffect} from 'react';

function DigitalClock(){
    const [time,settime] = useState(new Date());

    useEffect(()=>{
     const intervalId = setInterval(()=>{
        settime(new Date());
     },1000);
return()=>{
    clearInterval(intervalId);
}

    },[]);


    function format(){
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const sec = time.getSeconds();

        const meridiem = hours >=12 ? "PM" : "AM";

        hours = hours % 12 || 12;

        return `${hours}:${padzero(minutes)}:${padzero(sec)} ${meridiem}`;
    }
function padzero(number){
    return(number < 10 ? "0" : "") + number;
}

    return(<div className='clock-container'>
           <div className='clock'>
            <span>{format()}</span>
           </div>
                  
         </div>);
}
export default DigitalClock;