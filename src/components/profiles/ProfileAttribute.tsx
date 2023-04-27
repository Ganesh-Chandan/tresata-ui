import styles from "./ProfileAttribute.module.scss";

interface ProfileAttributeProp {
  id: string;
  label: string;
  tag: string;
  selected?: boolean;
  starred: boolean;
  populated: string;
  unique: string;
  showSecondaryLabel?: boolean;
  populatedIndicator: string;
  selectAttribute: (id: string) => void;
  isImageRequired: boolean;
}

const ProfileAttribute: React.FC<ProfileAttributeProp> = ({
  id,
  label,
  selected = false,
  starred,
  tag,
  populated,
  unique,
  showSecondaryLabel = false,
  populatedIndicator,
  selectAttribute,
  isImageRequired,
}) => {
  return (
    <div
      className={`${styles.container} ${selected ? styles.selected : ""}`}
      onClick={() => selectAttribute(id)}
    >
      <div className={`${styles.star} ${starred ? styles.selected : ""}`} />
      <div className={styles.labelContainer}>
        <div className={styles.label}>{label}</div>
        <div
          className={`${styles.tag} ${tag === "No tag" ? styles.noTag : ""}`}
        >
          {isImageRequired && (
            <div className={styles.tagImage}>
              <div className={styles.background} />
              <div className={styles.imageT} />
            </div>
          )}
          {tag}
        </div>
      </div>
      <div className={styles.populated}>
        <div className={styles.secondaryLabel}>
          {showSecondaryLabel ? "Populated" : ""}
        </div>
        <div
          className={`${styles.populatedMetric} ${styles.indicator} ${
            populatedIndicator === "positive" ? styles.green : styles.red
          }`}
        >
          {populated}
        </div>
      </div>
      <div className={styles.unique}>
        <div className={styles.secondaryLabel}>
          {showSecondaryLabel ? "Unique" : ""}
        </div>
        <div className={`${styles.uniqueMetric} ${styles.indicator}`}>
          {unique}
        </div>
      </div>
    </div>
  );
};

export default ProfileAttribute;
