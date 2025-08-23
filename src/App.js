import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import GroupChat from './Pages/Group Chat/Groupchat'; // make sure folder has no space
import Login from './Pages/Login/Login';
import SignUp from './Pages/Signup/Signup';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Default page is Login */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/groupchat" element={<GroupChat />} />
      </Routes>
    </Router>
  );
};

export default App;
