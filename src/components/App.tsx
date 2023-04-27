import Header from "./header";
import { Footer } from "./footer";
import { Profiles } from "./profiles";
import { ProfileContent } from "./profile-content";

const App = () => {
  return (
    <div className="app" role="app">
      <Header />
      <div className="profile-detail">
        <header className="profile-header">
          Profile Sources (02)
          <div className="notes">
            <div className="notesIcon"></div>
            Notes
          </div>
        </header>
        <div className="profile-section">
          <Profiles />
          <ProfileContent />
        </div>
      </div>
      <div className="footer-hide"></div>
      <Footer />
    </div>
  );
};

export default App;
