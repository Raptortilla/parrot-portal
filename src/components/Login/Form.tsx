import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Button, Card, CardContent } from '@mui/material';
import OutlinedTextField from '../common/OutlinedTextField';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Form = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const navigate = useNavigate();

  const validate = () => {
    // TODO: validate fields
    return true;
  };

  const handleLogin = () => {
    // TODO: log in logic
    navigate('/', { replace: true });
  };

  return (
    <Card sx={{ minWidth: 350 }}>
      <CardContent
        sx={{
          justifyContent: 'center',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <OutlinedTextField
          label="Email"
          type="email"
          value={email}
          onChange={setEmail}
          containerStyles={{ mb: 2 }}
        />
        <OutlinedTextField
          label="Password"
          type={showPassword ? 'text' : 'password'}
          value={password}
          endIcon={showPassword ? <VisibilityOff /> : <Visibility />}
          onClickEndIcon={() => setShowPassword(!showPassword)}
          onChange={setPassword}
          containerStyles={{ mb: 2 }}
        />
        <Button variant="contained" onClick={handleLogin}>
          Log in
        </Button>
      </CardContent>
    </Card>
  );
};

export default Form;
