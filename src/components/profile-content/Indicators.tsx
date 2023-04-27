import Widget from "../custom/Widget";
import styles from "./ProfileContent.module.scss";

const Indicators = () => (
  <div className={styles.itemIndicators}>
    <div className={styles.itemPopulated}>
      <Widget
        title="#Populated"
        value="7/12"
        description="5 Null values Reported"
      ></Widget>
    </div>
    <div className={styles.itemPercentPopulated}>
      <Widget
        title="%Populated"
        value="58.33%"
        description="41.67 Null values Reported"
      ></Widget>
    </div>
    <div className={styles.itemUnique}>
      <Widget
        title="#Uniques"
        value="7/12"
        description="5 Null values Reported"
      ></Widget>
    </div>
    <div className={styles.itemFormat}>
      <Widget title="Format" value="Float" description=""></Widget>
    </div>
  </div>
);

export default Indicators;
