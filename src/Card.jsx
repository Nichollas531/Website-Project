import profilePic from "./assets/150x150.png";
function Card() {
  return (
    <div className="card">
      <img className="card-image" src={profilePic} alt="profile picture" />
      <h2 className="card-title">Larissa</h2>
      <p className="card-text">Driver instructor for automatic car</p>
    </div>
  );
}
export default Card;
