import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/Login';
import HomePage from './pages/Home';

function App() {
  console.log(process.env.COGNITO_USER_POOL_ID);
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />

      <Route path="*" element={<HomePage />} />
    </Routes>
  );
}

export default App;
