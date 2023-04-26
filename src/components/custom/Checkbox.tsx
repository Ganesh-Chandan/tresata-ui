import styles from "./checkbox.module.scss";

interface ICheckbox {
  className?: string;
  label: string;
  isChecked?: boolean;
  onChange?: Function;
}

const Checkbox = ({
  className = "",
  label,
  isChecked = false,
  onChange = () => {},
}: ICheckbox) => {
  const onChangeHandler = (event: any) => onChange(event, !isChecked);

  return (
    <div className={`${styles.checkbox} ${className}`}>
      <input
        type="checkbox"
        id="checkboxInput"
        className={styles.checkboxInput}
        checked={isChecked}
        onChange={onChangeHandler}
      />
      <label className={styles.checkboxLabel}>{label}</label>
    </div>
  );
};

export default Checkbox;
