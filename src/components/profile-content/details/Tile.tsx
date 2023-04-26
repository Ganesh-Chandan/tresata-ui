import Checkbox from "../../custom/Checkbox";
import styles from "./deatailsTile.module.scss";

interface IDetailsTile {
  title: string;
  items: { [key: string]: string }[];
  isCheckboxRequired?: boolean;
  theme: string;
}

const DetailsTile = ({
  title,
  items,
  isCheckboxRequired,
  theme,
}: IDetailsTile) => {
  return (
    <div className={styles.detailsTile}>
      <div className={styles.detailsTileTitle}>
        {`${title} (${items.length})`}
        <div className={styles.detailsTileInfo}></div>
      </div>
      <div className={`${styles.detailsItems} ${styles[theme]}`}>
        {items.map(({ name, value }) => (
          <div className={styles.detailsItem}>
            <div className={styles.detailsName}>
              {isCheckboxRequired ? (
                <Checkbox
                  isChecked={true}
                  label={name}
                  className={styles.detailsNameLabel}
                ></Checkbox>
              ) : (
                name
              )}
            </div>
            <div className={styles.detailsValue}>{value}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetailsTile;
