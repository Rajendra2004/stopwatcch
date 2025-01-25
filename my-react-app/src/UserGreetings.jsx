function UserGreetings(props){
    const welcomemsg = <h2 className="welcome-msg">welcome {props.username}</h2>
    const loginprompt = <h2 className="Try">please login to continue</h2>
  return(
   props.isLoggedIn ? welcomemsg : loginprompt
);

}
export default UserGreetings