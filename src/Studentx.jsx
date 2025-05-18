function Student(props) {
  return (
    <div className="student">
      <p>name: {props.name}</p>
      <p>age: {props.age}</p>
      <p>Students: {props.isStudent ? "Yes" : "No"}</p>
    </div>
  );
}
/*Sudent.typeoff= {
  name: propTypes.string,
  age: propTypes.number,
  isStudent: propTypes.bool,
};
*/
export default Student;
