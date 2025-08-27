import WelcomeMessage from "./components/WelcomeMessage";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import UserProfile from "./components/UserProfile";


function App() {

  return (
    
      <div className="App">
        <WelcomeMessage />
        <Header />
        <MainContent />

        {/* Example UserProgile component usage */}
        <UserProfile
        name="Alice"
        age="25"
        bio="Loves hiking and photography"
        />

        {/* You can add another UserProfile with different data if you like */}
        <UserProfile
        name="Bob"
        age="30"
        bio="Enjoys coding and video games"
        />
        <Footer />
        </div>
      
  );
}

export default App;
