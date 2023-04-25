import Toggle from "../custom/Toggle";
import SubHeader from "./SubHeader";
import Icon from "../custom/Icon";

const Header = () => {
  return (
    <header>
      <div className="app-header">
        <div>
          <div className="appLogo">
            <img
              src="../image/logo.png"
              alt="Tresata Logo"
              width="152"
              height="25"
            ></img>
          </div>
          <div className="userName">Hello Alex!</div>
        </div>
        <div className="iconsDiv">
          <Icon name="home" />
          <Icon name="undo" />
        </div>
        <div className="actionAndUser">
          <div className="assistiveMode">
            <label>Assistive mode</label>
            <Toggle />
          </div>
          <div className="communityInfo">
            <label>Tresata Community</label>
          </div>
          <div className="notifcations">
            <span className="notifactionIcon"></span>
          </div>
          <div className="userIcon">
            <img
              src="../image/profile.png"
              alt="User Icon"
              width="40"
              height="40"
            ></img>
          </div>
        </div>
      </div>
      <SubHeader />
    </header>
  );
};

export default Header;
