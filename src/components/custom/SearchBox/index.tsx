import styles from "./SearchBox.module.scss";

interface ISearchBox {
  onSearch?: () => void;
  placeHolder: string;
  isProfileSearch?: boolean;
}

const SearchBox = ({
  onSearch = () => {},
  placeHolder,
  isProfileSearch = false,
}: ISearchBox) => {
  return (
    <div
      className={`${styles.searchBox} ${
        isProfileSearch ? styles.profileSearch : ""
      }`}
    >
      <span className={styles.serachIcon}></span>
      <input
        className={styles.serachInput}
        onChange={onSearch}
        placeholder={placeHolder}
      ></input>
    </div>
  );
};

export default SearchBox;
