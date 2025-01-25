import React,{useState,createContext} from 'react';

import ComponentB from './ComponentB.jsx'
 
export const MyContext = createContext();

function UseContext(){
const [user,setUser] = useState(" Rajendra");
    return(
       
       <div className="box">
        <h1>ComponentA</h1>
        <h2>{`${user}`}</h2>
        <MyContext.Provider value={user}>
        <ComponentB user={user}/>
        </MyContext.Provider>
       
        
       </div>
    );
}
export default UseContext