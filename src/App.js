import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
// import Login from './Pages/Login/Login';
// import SignUp from './Pages/SignUp/SignUp';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Temporarily disabled routes */}
        {/* <Route path="/signup" element={<SignUp />} /> */}
        {/* <Route path="/login" element={<Login />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
