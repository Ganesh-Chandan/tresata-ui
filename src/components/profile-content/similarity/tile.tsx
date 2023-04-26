import styles from "../ProfileContent.module.scss";

const Tile = () => {
  return (
    <div className={styles.similarityTile}>
      <button className={styles.addTagButton}>Add Tag</button>
      <div className=""></div>
    </div>
  );
};

export default Tile;
