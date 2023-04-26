import styles from "./SearchBox.module.scss";

interface ISearchBox {
  className?: string;
  onSearch?: () => void;
  placeHolder: string;
}

const SearchBox = ({
  className = "",
  onSearch = () => {},
  placeHolder,
}: ISearchBox) => {
  return (
    <div className={`${styles.searchBox} ${className}`}>
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
