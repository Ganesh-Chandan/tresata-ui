import styles from "./Icon.module.scss";

interface IIcon {
  name: string;
  className?: string;
}

const Icon = ({ name, className = "" }: IIcon) => (
  <div className={`${styles.icon} ${className}`}>
    <span className={styles[name]}></span>
  </div>
);

export default Icon;
