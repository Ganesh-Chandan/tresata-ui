import styles from "./ProfileContent.module.scss";
import Similarity from "./similarity";
import Indicators from "./Indicators";
import { Details } from "./details";

const ProfileContent = () => {
  return (
    <div className={styles.container}>
      <Indicators />
      <div className={styles.itemSimilarity}>
        <Similarity />
      </div>
      <Details />
    </div>
  );
};

export default ProfileContent;
