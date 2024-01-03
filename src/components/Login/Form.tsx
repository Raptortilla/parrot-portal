import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
} from '@mui/material';
import OutlinedTextField from '../common/OutlinedTextField';
import { useState } from 'react';
import LogoBrandPNG from '../../assets/images/logo-brand-b.png';
import { authenticate } from '../../services/authentication';

const Form = () => {
  const [credentials, setCredentials] = useState<{
    email: string;
    password: string;
  }>({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const validate = () => {
    // TODO: validate fields
    const VALID_EMAIL_REGEXP = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    const { email, password } = credentials;

    if (!email) {
      setError('Email field is required.');
      return;
    }

    if (!VALID_EMAIL_REGEXP.test(email)) {
      setError('You must enter a valid email.');
      return;
    }

    if (!password) {
      setError('Password field is required.');
      return;
    }

    handleLogin();
  };

  const handleLogin = () => {
    setLoading(true);
    const { email, password } = credentials;

    authenticate(email, password)
      .then((data) => {
        // TODO: persist whatever we need (or maybe do it in authenticate service?)
        window.location.href = '/';
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  };

  const handleChange = (prop: string, value: string) => {
    setError('');
    setCredentials({ ...credentials, [prop]: value });
  };

  return (
    <>
      <Card sx={{ minWidth: 350 }}>
        <CardContent
          component="form"
          onSubmit={(e) => e.preventDefault()}
          sx={{
            justifyContent: 'center',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
            <img
              src={LogoBrandPNG}
              alt="Logo + brand"
              loading="lazy"
              style={{ width: '200px' }}
            />
          </Box>
          <OutlinedTextField
            label="Email"
            type="text"
            value={credentials.email}
            onChange={(value) => handleChange('email', value)}
            containerStyles={{ mb: 2 }}
          />
          <OutlinedTextField
            label="Password"
            type={showPassword ? 'text' : 'password'}
            value={credentials.password}
            endIcon={showPassword ? <VisibilityOff /> : <Visibility />}
            onClickEndIcon={() => setShowPassword(!showPassword)}
            onChange={(value) => handleChange('password', value)}
            containerStyles={{ mb: 3 }}
          />
          <Button
            variant="contained"
            onClick={validate}
            type="submit"
            disabled={loading}
            sx={{ height: '36px' }}
          >
            {loading ? (
              <CircularProgress color="secondary" size={16} />
            ) : (
              'Log in'
            )}
          </Button>

          {error && (
            <Alert sx={{ mt: 2 }} severity="error">
              {error}
            </Alert>
          )}
        </CardContent>
      </Card>
    </>
  );
};

export default Form;
