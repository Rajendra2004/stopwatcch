import React,{useState} from 'react'

function UpdaterFunctions(){
const [count,setCount] = useState(0);

function increment(){
    setCount(c => c + 1);
    setCount(c => c + 2);
    setCount(c => c + 1);
};

function decrement(){
    setCount(c => c - 1);
    setCount(c => c - 1);  
    setCount(c => c - 1);
};
function reset(){
    setCount(0);
};

return(<div className='container'><p>Count:{count}</p><button className='button'onClick={increment}>Increment</button>
                                <button className='button' onClick={decrement}>Decrement</button>
                                <button className='button' onClick={reset}>Reset</button>

</div> );

}
