import styles from "./ProfileSource.module.scss";

interface ProfileSourceProp {
  selected: boolean;
  starred: boolean;
  label: string;
  expanded: boolean;
  record: number;
  fields: number;
  secondaryLabel: string;
  secondaryLabelQty: string;
}

const ProfileSource: React.FC<ProfileSourceProp> = ({
  selected,
  starred,
  label,
  expanded,
  record,
  fields,
  secondaryLabel,
  secondaryLabelQty,
}) => {
  return (
    <div>
      <div
        className={`${styles.checkbox} ${selected ? styles.selected : ""}`}
      />
      <div className={`${styles.star} ${starred ? styles.selected : ""}`} />
    </div>
  );
};

export default ProfileSource;
