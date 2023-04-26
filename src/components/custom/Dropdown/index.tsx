import { ReactNode, useState } from "react";
import styles from "./dropdown.module.scss";
import Checkbox from "../Checkbox";

interface IDropdown {
  className?: string;
  items: { name: string; value: any }[];
  children: ReactNode;
  width: number;
  height: number;
  selecetedItems: string[];
  onSelect: Function;
}

const Dropdown = ({
  className,
  items,
  children,
  width = 150,
  height = 200,
  selecetedItems,
  onSelect,
}: IDropdown) => {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    width: 0,
    height,
  });

  const { height: placeHolderheight } = position;

  const openDropdown = (event: any) => {
    const target = event.target.getBoundingClientRect();
    setPosition(target);
    setIsOpen(!isOpen);
  };

  return (
    <div className={`${styles.dropdown} ${className}`}>
      <div className={`${styles.dropdownPlaceholder}`} onClick={openDropdown}>
        {children}
      </div>
      <div
        className={isOpen ? styles.dropdownContent : ""}
        style={
          isOpen
            ? {
                width,
                height,
                bottom: placeHolderheight + 10,
                right: 0,
              }
            : { width: 0, height: 0 }
        }
      >
        {isOpen && (
          <>
            <ul className={styles.dropdownLists}>
              {items.map(({ name, value }) => (
                <li className={styles.dropdownListItem} key={value}>
                  <Checkbox
                    label={name}
                    isChecked={selecetedItems.includes(value)}
                    onChange={(event: any, isChecked: boolean) =>
                      onSelect(value, isChecked)
                    }
                  />
                </li>
              ))}
            </ul>
            <div className={styles.actions}>
              <button className={styles.actionButton}>CANCEL</button>
              <button className={styles.actionButton}>APPLY</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
