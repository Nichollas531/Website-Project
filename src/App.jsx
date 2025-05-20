import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Food from "./Food.jsx";
import Card from "./Card.jsx";
import Button from "./Button/Button.jsx";
import Student from "./Studentx.jsx";
import UserGreeting from "./UserGreeting.jsx";
import List from "./List.jsx";
import ProfilePicture from "./ProfilePicture.jsx";
import MyComponnet from "./MyComponnet.jsx";
import Counter from "./Counter.jsx";
import MyChangeComponent from "./MyChangeComponent.jsx";
import ColorPicker from "./ColorPicker.jsx";
import Objects from "./Objects.jsx";
import Foods from "./Foods.jsx";
import Cars from "./Cars.jsx";
import ToDoList from "./ToDoList.jsx";
function App() {
  return (
    <>
      <Header />
      <ToDoList />
      {/*
      <Cars />
      <Foods />
      <Objects />
      <Counter />
      <ColorPicker />
      <MyChangeComponent />
      <MyComponnet />
      <ProfilePicture />
      <List />
      <UserGreeting isLoggedIn={true} username="Sheila" />
      <Student name="Nichollas" age={25} isStudent={false} />
      <Student name="Lucas" age={23} isStudent={false} />
      <Student name="Clarice" age={37} isStudent={true} />
      <Card />
      <Food />
      */}
      <Footer />
    </>
  );
}

export default App;
