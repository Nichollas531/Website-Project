function UserGreeting(props) {
  /* if (props.isLoggedIn) {
    return <h2>Welcome {props.username}</h2>;
  } else {
    return <h2>Please Log in to continue</h2>;
  }

    */

  const welcomemessage = (
    <h2 className="welcome-message"> Welcome {props.username}</h2>
  );
  const loginprompt = <h2 className="login-prompt">please Log in</h2>;

  return props.isLoggedIn ? welcomemessage : loginprompt;
}
export default UserGreeting;
