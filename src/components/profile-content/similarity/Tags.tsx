import styles from "../ProfileContent.module.scss";
import Checkbox from "../../custom/Checkbox";

interface ITag {
  tag: {
    id: number;
    name: string;
    tileInfo: string;
    isChecked: boolean;
    percentage: string;
  };
  onChange: Function;
  isChecked: boolean;
}

const Tag = ({ tag, onChange, isChecked }: ITag) => {
  const { id, name, tileInfo, percentage } = tag;

  const onChangeHandler = (event: any, isChecked: boolean) =>
    onChange(id, isChecked);

  return (
    <div className={styles.similarityTile}>
      <button className={styles.addTagButton}>Add Tag</button>
      <Checkbox
        label={name}
        className={styles.tileItemName}
        isChecked={isChecked}
        onChange={onChangeHandler}
      />
      <div className={styles.tileInfo}>{tileInfo}</div>
      <div className={styles.percentage}>{percentage}</div>
    </div>
  );
};

export default Tag;
