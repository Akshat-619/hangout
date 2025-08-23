import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Pages/Home/Home';
import GroupChat from './Pages/Group Chat/Groupchat';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Signup/Signup';

const App = () => {
  const isLoggedIn = false; // For now, just a placeholder. Later replace with real auth logic

  return (
    <Router>
      <Routes>
        {/* Default route redirects to login if not logged in */}
        <Route path="/" element={isLoggedIn ? <Home /> : <Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={isLoggedIn ? <Home /> : <Navigate to="/login" />} />
        <Route path="/groupchat" element={isLoggedIn ? <GroupChat /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
