function Profile(){
 const imageUrl = './src/assets/image.png';
 const handleClick = (e) => e.target.style.display =console.log("clicked");
 return(<img  classsName="image" onClick = { (e) => handleClick(e)} src={imageUrl}></img>);
}
export default Profile