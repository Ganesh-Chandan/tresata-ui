import styles from "../ProfileContent.module.scss";
import Dropdown from "../../custom/Dropdown";
import { useState } from "react";

interface IAddTags {
  selectedTagsCount: number;
}

const AddTags = ({ selectedTagsCount }: IAddTags) => {
  const [items] = useState([
    { name: "phone", value: "phone" },
    { name: "Contact info", value: "Contact info" },
    { name: "pill", value: "pill" },
    { name: "Identifier", value: "Identifier" },
    { name: "contact", value: "contact" },
  ]);

  const [selectedTags, setSelecetedTags] = useState<string[]>([]);

  const onChangeHandler = (value: string, isChecked: boolean) => {
    if (selectedTags.includes(value)) {
      selectedTags.splice(selectedTags.indexOf(value), 1);
    } else {
      selectedTags.push(value);
    }
    setSelecetedTags([...selectedTags]);
  };

  return (
    <div className={styles.addTags}>
      <div className={styles.selecetedTags} data-testid="selectedTags">
        {selectedTagsCount} Selected
      </div>
      <Dropdown
        className={styles.selecetedTagButton}
        items={items}
        selecetedItems={selectedTags}
        width={150}
        height={230}
        onSelect={onChangeHandler}
      >
        ADD TAGS
      </Dropdown>
    </div>
  );
};

export default AddTags;
