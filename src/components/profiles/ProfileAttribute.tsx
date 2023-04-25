import styles from "./ProfileAttribute.module.scss";

interface ProfileAttributeProp {
  label: string;
  tag: string;
  selected: boolean;
  starred: boolean;
  populated: string;
  unique: string;
  showSecondaryLabel?: boolean;
}

const ProfileAttribute: React.FC<ProfileAttributeProp> = ({
  label,
  selected = false,
  starred,
  tag,
  populated,
  unique,
  showSecondaryLabel = false,
}) => {
  return (
    <div className={`${styles.container} ${selected ? styles.selected : ""}`}>
      <div className={`${styles.star} ${starred ? styles.selected : ""}`} />
      <div className={styles.labelContainer}>
        <div className={styles.label}>{label}</div>
        <div className={styles.tag}>{tag}</div>
      </div>
      <div className={styles.populated}>
        <div className={styles.secondaryLabel}>
          {showSecondaryLabel ? "Populated" : ""}
        </div>
        <div className={styles.populatedMetric}>{populated}</div>
      </div>
      <div className={styles.unique}>
        <div className={styles.secondaryLabel}>
          {showSecondaryLabel ? "Unique" : ""}
        </div>
        <div className={styles.uniqueMetric}>{unique}</div>
      </div>
    </div>
  );
};

export default ProfileAttribute;
