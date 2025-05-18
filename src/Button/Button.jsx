import styles from "./Button.module.css";

function Button() {
  const estilo = {
    backgroundColor: " rgb(0, 163, 238)",
    color: "white",
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
  };

  const handleClick = (e) => (e.target.textContent = "oshi");
  let count = 0;
  /*onst handleClick2 = (name) => {
    if (count < 3) {
      count++;
      console.log(`you have clicked ${count} times`);
    } else {
      console.log(`${name} stop clicking!`);
    }
  };
  */
  return (
    <>
      <button className={styles.button} onDoubleClick={(e) => handleClick(e)}>
        Click me
      </button>
    </>
  );
}
//<button style={estilo}>not me</button>
export default Button;
