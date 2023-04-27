import styles from "./Toggle.module.scss";

interface IToggle {
  width?: number;
  height?: number;
  isChecked?: boolean;
  onChange: Function;
}

const Toggle = ({
  width = 26,
  height = 14,
  isChecked = true,
  onChange,
}: IToggle) => {
  return (
    <label className={styles.switch} style={{ width, height }}>
      <input type="checkbox" checked={isChecked} />
      <span
        className={`${styles.slider} ${styles.round}`}
        style={{ borderRadius: height / 2 }}
        onClick={() => onChange(!isChecked)}
      ></span>
    </label>
  );
};

export default Toggle;
