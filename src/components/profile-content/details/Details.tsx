import DetailsTile from "./DetailsTile";
import styles from "../ProfileContent.module.scss";
import ModifyTags from "./ModifyTags";

const Details = () => {
  return (
    <>
      <div className={styles.itemDetail}>
        <div className={styles.tiles}>
          <DetailsTile
            title="Top Values"
            theme="blue"
            items={[
              { name: "987-654-4343", value: "8.33%" },
              { name: "987-654-4344", value: "8.33%" },
              { name: "987-654-4345", value: "28.33%" },
              { name: "987-654-4346", value: "28.33%" },
              { name: "987-654-4347", value: "18.33%" },
              { name: "987-654-4348", value: "8.33%" },
              { name: "987-654-4349", value: "8.33%" },
            ]}
            isCheckboxRequired={true}
          />
          <DetailsTile
            title="Top Patterns"
            theme="purple"
            items={[
              { name: "###-###-####", value: "33.33%" },
              { name: "###-###-####", value: "33.33%" },
              { name: "###-###-####", value: "28.33%" },
            ]}
            isCheckboxRequired={false}
          />
          <DetailsTile
            title="Top Formats"
            theme="green"
            items={[
              { name: "Float", value: "33.33%" },
              { name: "Float", value: "33.33%" },
              { name: "Float", value: "28.33%" },
            ]}
            isCheckboxRequired={false}
          />
        </div>
        <ModifyTags />
      </div>
    </>
  );
};

export default Details;
