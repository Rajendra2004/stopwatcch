import React, {useState} from 'react';
function Modifications(){
const [car,setCar] = useState([]);
const [carMake,setMake] = useState("");
const [carModel,setModel] = useState("");
const [carYear,setYear] = useState(new Date().getFullYear());

function handleAddCar(){
    const newCar = {
        year:carYear,
        model:carModel,
        make:carMake
    };
setCar(c => [...c,newCar]);

}
function removeCar(index){
  setCar(c => car.filter((_,i)=>i!==index));
}
function handleMake(event){
  setMake(event.target.value);  
}
function handleModel(event){
  setModel(event.target.value);  
}
function handleYear(event){
    setYear(event.target.value);
    
}
return(<div>
    <h2>List of Cars</h2>
  <ul>
{car.map((car,index) =>
<li key={index} onClick={() =>removeCar(index)}>{car.year} {car.make} {car.model}</li>)}
  </ul>
  
    <input type="text" value={carMake} placeholder='enter a make' onChange={handleMake}/><br/>
    <input type="text" value={carModel} placeholder='enter a model' onChange={handleModel}/><br/>
    <input type="number" value={carYear} placeholder='enter a Year' onChange={handleYear}/>
    <br/><button onClick={handleAddCar} >Add Car</button>
   
</div>);
 }
 export default Modifications
