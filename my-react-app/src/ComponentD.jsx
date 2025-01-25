import React,{useContext} from 'react'; 
import { MyContext } from './UseContext.jsx';

function ComponentD(){
const user=useContext(MyContext);
 
    return(
       
       <div className="box">
        <MyContext.Provider value={user}>
        <h1>ComponentD </h1>
        <h2>{`Bye ${user}`}</h2>
        </MyContext.Provider>
       

       </div>
    );
}
export default ComponentD