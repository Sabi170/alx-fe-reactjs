import WelcomeMessage from "./components/WelcomeMessage";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import UserProfile from "./components/UserProfile";
import Counter from "./components/Counter";


function App() {
  return (

      <div style={{ fontFamily: 'Arial, sans-serif', margin: 0, padding: 0 }}>
        <Header />
        <UserProfile name="John Doe" age={30} bio="A passionate React developer and avid learner." />
        <div className="App">
      <h1>Simple Counter Application</h1>
      <Counter />
    </div>
        <MainContent />
        < Footer />
      </div>
  );
}

export default App;