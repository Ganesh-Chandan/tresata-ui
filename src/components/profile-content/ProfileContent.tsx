import styles from "./ProfileContent.module.scss";

const ProfileContent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.itemIndicators}>
        <div className={styles.itemPopulated}></div>
        <div className={styles.itemPercentPopulated}></div>
        <div className={styles.itemUnique}></div>
        <div className={styles.itemFormat}></div>
      </div>
      <div className={styles.itemSimilarity}></div>
      <div className={styles.itemDetail}></div>
    </div>
  );
};

export default ProfileContent;
