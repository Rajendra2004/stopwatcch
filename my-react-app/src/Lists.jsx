function Lists(){
const fruits = ["apple","orange","banana","pineapple"];
const fruitItems = fruits.map(fruit => <li>{fruit}</li>)
return(<ul className="items">{fruitItems}</ul>);

}
export default Lists