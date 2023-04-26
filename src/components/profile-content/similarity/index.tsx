import styles from "../ProfileContent.module.scss";
import Tile from "./tile";

const Similarity = () => {
  return (
    <>
      <div className={styles.similarityTiles}>
        <Tile />
      </div>
    </>
  );
};

export default Similarity;
