import styles from "./Widget.module.scss";

interface IWidget {
  title: string;
  value: string;
  description: string;
}

const Widget = ({ title, value, description }: IWidget) => {
  return (
    <div className={styles.widget}>
      <div className={styles.widgetTitle}>{title}</div>
      <div className={styles.widgetValue}>{value}</div>
      <div className={styles.widgetDescription}>{description}</div>
    </div>
  );
};

export default Widget;
