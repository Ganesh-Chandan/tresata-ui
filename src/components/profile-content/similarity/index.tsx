import { useState, useEffect } from "react";
import styles from "../ProfileContent.module.scss";
import Tag from "./Tags";
import Information from "./Information";
import AddTags from "./AddTags";
import Checkbox from "../../custom/Checkbox";

const Similarity = () => {
  const [selectAll, setSelectAll] = useState(false);
  const [selectedTags, setSelectedTags] = useState<number[]>([]);
  const [tags, setTags] = useState([
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

  useEffect(() => {
    const isAllSelected = !tags.some(({ isChecked }) => !isChecked);
    setSelectAll(isAllSelected);
  }, [tags]);

  const onChangeHandler = (id: number, isChecked: boolean) => {
    setSelectedTags((state) => {
      if (selectedTags.includes(id)) {
        state.splice(selectedTags.indexOf(id), 1);
      } else {
        state.push(id);
      }
      return [...state];
    });
    setTags((state) =>
      state.map((data) => {
        if (data.id === id) {
          data.isChecked = isChecked;
        }
        return data;
      })
    );
  };

  const onSelectAllHandler = (event: any, isChecked: boolean) => {
    setSelectAll(isChecked);
    setTags((state) =>
      state.map((data) => {
        data.isChecked = isChecked;
        return data;
      })
    );
  };

  return (
    <>
      <div className={styles.similarityTiles}>
        <Checkbox
          label="Select All"
          className={styles.selectAll}
          onChange={onSelectAllHandler}
          isChecked={selectAll}
        />
        {tags.map((tag) => (
          <Tag
            tag={tag}
            onChange={onChangeHandler}
            key={tag.id}
            isChecked={tag.isChecked}
          />
        ))}
      </div>
      <AddTags selectedTags={selectedTags.length} />
      <Information />
    </>
  );
};

export default Similarity;
