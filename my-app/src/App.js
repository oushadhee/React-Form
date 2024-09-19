import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Welcome from './components/Welcome';
import FirstPage from './components/FirstPage';
import SecondPage from './components/SecondPage';  
import Home from './components/Home';

function App() {
  return (
    <Router>
    <div className="App">
      
    <Welcome/>
   

      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/welcome-page" element={<Welcome />} />
          <Route path="/first-page" element={<FirstPage />} />
          <Route path="/second-page" element={<SecondPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
