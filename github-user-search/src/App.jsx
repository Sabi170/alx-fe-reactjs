import React from 'react';
import './App.css';
import Search from './components/Search';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>GitHub User Search</h1>
      </header>
      <main>
        <Search />
        {/* Render the Search component */}
        <p>Welcome to the GitHub User Search Application!</p>
      </main>
    </div>
  );
}

export default App;