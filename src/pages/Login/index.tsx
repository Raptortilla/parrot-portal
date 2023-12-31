import { Box } from '@mui/material';
import Form from '../../components/Login/Form';

const LoginPage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#1E1E1E',
      }}
    >
      <Form />
    </Box>
  );
};

export default LoginPage;
