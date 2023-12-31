import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/Login';
import { Typography } from '@mui/material';

const Home = () => {
  return (
    <div className="App">
      <Typography variant="h3">Testing fonts</Typography>
    </div>
  );
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginPage />} />

      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default App;
