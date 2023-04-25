import SearchBox from "../custom/SearchBox";
import Icon from "../custom/Icon";

const SubHeader = () => {
  return (
    <div className="appSubHeader">
      <div className="reviewHeatMap">
        <div className="information">
          <span>Deep dive to choose your corals</span>
          <span>Understand Your Data And Assign Tags</span>
        </div>
        <button className="reviewHeatMapButton">REVIEW HEATMAP</button>
      </div>
      <div className="prouctDetails">
        <label className="productNameText">Product Name |</label>
        <span className="productName"> Airline</span>
      </div>
      <div className="serachAndFilter">
        <SearchBox placeHolder="Search from Directory, Source, Tag or Add a Path" />
        <Icon name="filter" className="filters" />
        <div className="showPineed">
          <input type="checkbox" id="showpinnedInput" />
          <label htmlFor="showpinnedInput" className="showpinnedLabel">
            Show Pinned
          </label>
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
