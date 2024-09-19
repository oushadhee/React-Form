import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Welcome from './components/Welcome';
import FirstPage from './components/FirstPage';
import SecondPage from './components/SecondPage';  

function App() {
  return (
    <Router>
    <div className="App">
      <h1>Welcome to our form</h1>

      <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/first-page" element={<FirstPage />} />
          <Route path="/second-page" element={<SecondPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
