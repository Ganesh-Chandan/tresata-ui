import styles from "./checkbox.module.scss";

interface ICheckbox {
  className: string;
  label: string;
  onChange: () => void;
}

const Checkbox = ({
  className = "",
  label,
  onChange = () => {},
}: ICheckbox) => {
  return (
    <div className={`${styles.checkbox} ${className}`}>
      <input
        type="checkbox"
        id="checkboxInput"
        className={styles.checkboxInput}
      />
      <label htmlFor="checkboxInput" className={styles.checkboxLabel}>
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
