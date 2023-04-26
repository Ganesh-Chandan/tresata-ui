import { useState } from "react";
import styles from "../ProfileContent.module.scss";
import Tag from "./Tags";
import Information from "./Information";
import Slider from "../../custom/Slider";
import AddTags from "./AddTags";
import Checkbox from "../../custom/Checkbox";

const Similarity = () => {
  const [selectedTags, setSelectedTags] = useState<number[]>([]);
  const [tags] = useState([
    {
      id: 123,
      name: "Orig Phone",
      tileInfo: "Payment - Systems - Transactions",
      isChecked: false,
      percentage: "31%",
    },
    {
      id: 124,
      name: "BenePhone",
      tileInfo: "AML_Investigation",
      isChecked: false,
      percentage: "43%",
    },
  ]);

  const onChangeHandler = (id: number, isChecked: boolean) => {
    if (selectedTags.includes(id)) {
      selectedTags.splice(selectedTags.indexOf(id), 1);
    } else {
      selectedTags.push(id);
    }
    setSelectedTags([...selectedTags]);
  };

  const onSelectAllHandler = (event: any, isChecked: boolean) => {
    if (isChecked) {
      setSelectedTags(() => tags.map(({ id }) => id));
    } else {
      setSelectedTags([]);
    }
  };

  return (
    <>
      <div className={styles.similarityTitle}>Similarity</div>
      <Slider value={20} className={styles.similaritySlider} />
      <div className={styles.similarityTiles}>
        <Checkbox
          label="Select All"
          className={styles.selectAll}
          onChange={onSelectAllHandler}
          isChecked={tags.length === selectedTags.length}
        />
        {tags.map((tag) => (
          <Tag
            tag={tag}
            onChange={onChangeHandler}
            key={tag.id}
            isChecked={selectedTags.includes(tag.id)}
          />
        ))}
      </div>
      <AddTags selectedTagsCount={selectedTags.length} />
      <Information />
    </>
  );
};

export default Similarity;
