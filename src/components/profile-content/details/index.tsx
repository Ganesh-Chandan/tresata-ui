import styles from "../ProfileContent.module.scss";
import DetailsTile from "./Tile";

const Details = () => {
  return (
    <div className={styles.itemDetail}>
      <DetailsTile
        title="Top Values"
        theme="green"
        items={[
          { name: "987-654-4343", value: "8.33%" },
          { name: "987-654-4344", value: "8.33%" },
          { name: "987-654-4345", value: "28.33%" },
          { name: "987-654-4346", value: "28.33%" },
          { name: "987-654-4347", value: "18.33%" },
          { name: "987-654-4348", value: "8.33%" },
          { name: "987-654-4349", value: "8.33%" },
        ]}
        isCheckboxRequired={false}
      />
    </div>
  );
};

export default Details;
