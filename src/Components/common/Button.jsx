import styles from "./Button.module.css";

function Button({ disabled,children, work }) {
  return (
    <button disabled={disabled} className={styles.button} onClick={work} data-testid="button">
      {children}
    </button>
  );
}

export default Button;
