import Header from "./components/header";
import { Footer } from "./components/footer";
import { Profiles } from "./components/profiles";
import { ProfileContent } from "./components/profile-content";

const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="profile-detail">
        <header className="profile-header">Profile Sources (02)</header>
        <div className="profile-section">
          <Profiles />
          <ProfileContent />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
