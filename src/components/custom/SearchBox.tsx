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
    <div className={`searchBox ${className}`}>
      <span className="serachIcon"></span>
      <input
        className="serachInput"
        onChange={onSearch}
        placeholder={placeHolder}
      ></input>
    </div>
  );
};

export default SearchBox;
