import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AuthContainer from './components/AuthContainer';
import Home from './pages/Home';

function App() {
  return (
    <Router>
        <Routes>
              {/* Default page shows the Login/SignUp container */}
              <Route path="/" element={<AuthContainer />} />
              
              {/* The Home page route */}
              <Route path="/home" element={<Home />} />

              {/* Redirect any unknown paths back to login */}
              <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    </Router>
  );
}

export default App;