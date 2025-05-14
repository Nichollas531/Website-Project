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
  return (
    <>
      (<button className={styles.button}>Click me</button>) (
      <button style={estilo}>not me</button>)
    </>
  );
}
export default Button;
