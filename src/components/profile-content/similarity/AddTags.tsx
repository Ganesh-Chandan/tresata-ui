import styles from "../ProfileContent.module.scss";

interface IAddTags {
  selectedTags: number;
}

const AddTags = ({ selectedTags }: IAddTags) => {
  return (
    <div className={styles.addTags}>
      <div className={styles.selecetedTags}>{selectedTags} Selected</div>
      <div className={styles.selecetedTagButton}>ADD TAGS</div>
    </div>
  );
};

export default AddTags;
