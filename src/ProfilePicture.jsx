function ProfilePicture() {
  const imageUrl = "./src/assets/150x150.png";
  const handleClick = (e) => (e.target.style.display = "none");
  return <img onClick={(e) => handleClick(e)} src={imageUrl}></img>;
}
export default ProfilePicture;
