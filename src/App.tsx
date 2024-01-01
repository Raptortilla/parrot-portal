import { Navigate, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/Login';
import HomePage from './pages/Home';
import { getCurrentUser } from './services/authentication';

function App() {
  if (!getCurrentUser())
    return (
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    );

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
