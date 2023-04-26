import SearchBox from "../custom/SearchBox";
import Icon from "../custom/Icon";
import Checkbox from "../custom/Checkbox";
import { useState } from "react";

const SubHeader = () => {
  const [showPinned, setShowPinned] = useState(false);

  const changeShowPinned = (event: any, value: boolean) => setShowPinned(value);

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
        <Checkbox
          className="showPineed"
          label="Show Pinned"
          isChecked={showPinned}
          onChange={changeShowPinned}
        />
      </div>
    </div>
  );
};

export default SubHeader;
