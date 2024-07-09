import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { setUser } from '../redux/authSlice';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from "../firebase/Configration";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      dispatch(setUser(userCredential.user));
      navigate('/layout/blogList'); // Navigate to blogList after successful login
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <Container>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
        }}
      >
        <Box sx={{ border: '1px solid gray', padding: "20px", width: '80%', maxWidth: 400 }}>
          <Typography variant="h3" component="h1" sx={{ marginTop: 2 }}>
            Login
          </Typography>
          <Box sx={{ mt: 2 }}>
            <form onSubmit={handleSubmit} style={{ width: '100%' }}>
              <TextField
                fullWidth
                label="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                margin="normal"
                required
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{ mt: 2, mb: 1 }}
              >
                Log In
              </Button>
              <Typography variant="body2" color="textSecondary" sx={{ textAlign: 'center' }}>
                <Button color="inherit" component={Link} to="/signup">Signup</Button>
              </Typography>
            </form>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
