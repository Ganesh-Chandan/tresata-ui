import styles from "./ModifyTags.module.scss";

const ModifyTags = () => {
  return (
    <div className={styles.modifyTag}>
      <div className={styles.tagButton}>CHANGE TAG</div>
      <div className={styles.tagButton}>REJECT</div>
      <div className={styles.tagButton}>APPROVE</div>
    </div>
  );
};

export default ModifyTags;
