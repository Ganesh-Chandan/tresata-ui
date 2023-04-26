import styles from "./Toggle.module.scss";

interface IToggle {
  width?: number;
  height?: number;
}

const Toggle = ({ width = 26, height = 14 }: IToggle) => {
  return (
    <label className={styles.switch} style={{ width, height }}>
      <input type="checkbox" />
      <span
        className={`${styles.slider} ${styles.round}`}
        style={{ borderRadius: height / 2 }}
      ></span>
    </label>
  );
};

export default Toggle;
