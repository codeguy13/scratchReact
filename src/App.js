import HomePage from './pages/HomePage';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage'

function App() {
  return (
    <Router>
      <div className="App">
        <div className="bg-secondary">
          <Route path="/" component={HomePage} exact />
          <Route path="/about" component={AboutPage} />
          <Route path="/contact" component={ContactPage} />
        </div>
      </div>
    </Router>
  );
}

export default App;
