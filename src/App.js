import './css/App.css';
import { Link, BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import the page components
import Home from './pages/Home';
import Friends from './pages/Friends';
import Profile from './pages/Profile';

// Import element components
import NavBar from './elements/NavBar';
import Footer from './elements/Footer';


function Title() {
  return (
    <Link to="/" className="title-link">
      <h1 className="title">Social Networking App</h1>
    </Link>
  )
}

function App() {
  return (
    <Router> {/* Wrapping the app with Router to enable routing */}
      <div className="app-container">
        <Title />
        <NavBar />
        <Routes> {/* Define the routes for different pages */}
          <Route path="/" element={<Home />} /> {/* Home page */}
          <Route path="/friends" element={<Friends />} /> {/* Friends page */}
          <Route path="/profile" element={<Profile />} /> {/* Profile page */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
