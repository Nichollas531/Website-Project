import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Food from "./Food.jsx";
import Card from "./Card.jsx";
import Button from "./Button/Button.jsx";
import Student from "./Studentx.jsx";
import UserGreeting from "./UserGreeting.jsx";
import List from "./List.jsx";
function App() {
  return (
    <>
      <Header />
      <Button />
      <List />
      <UserGreeting isLoggedIn={true} username="Sheila" />
      <Student name="Nichollas" age={25} isStudent={false} />
      <Student name="Lucas" age={23} isStudent={false} />
      <Student name="Clarice" age={37} isStudent={true} />
      <Card />
      <Food />
      <Footer />
    </>
  );
}

export default App;
