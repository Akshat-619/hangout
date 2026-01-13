import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './Context/AuthContext';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';
import Landing from './Pages/Landing/Landing';
import Home from './Pages/Home/Home';
import GroupChat from './Pages/Group Chat/Groupchat';
import ModernLogin from './Pages/Login/ModernLogin';
import ModernSignup from './Pages/Signup/ModernSignup';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<ModernLogin />} />
          <Route path="/signup" element={<ModernSignup />} />
          
          {/* Protected routes */}
          <Route path="/home" element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          } />
          <Route path="/groupchat" element={
            <ProtectedRoute>
              <GroupChat />
            </ProtectedRoute>
          } />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
