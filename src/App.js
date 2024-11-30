import logo from './logo.svg';
// import logo from './devops.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="welcome-message">Welcome to the React Application</h1>
        <p className="sub-text">
          Dive into the world of React, where creativity meets simplicity!
        </p>
        <button className="cta-button">Get Started</button>
      </header>
    </div>
  );
}

export default App;
