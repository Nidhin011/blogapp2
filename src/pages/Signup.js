import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { auth } from "../firebase/Configration";
import{auth} from "../firebase/Configration";
import { setUser } from '../redux/authSlice';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      dispatch(setUser(userCredential.user));
    } catch (error) {
      console.error('Error signing up:', error);
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
          <Typography variant="h3" component="h1" sx={{ marginTop: 2, textAlign: 'center' }}>
            Signup
          </Typography>
          <Box sx={{ mt: 2 }}>
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="Email"
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
                Signup
              </Button>
              <Typography variant="body2" color="textSecondary" sx={{ textAlign: 'center' }}>
             
                <Button color="inherit" component={Link} to="/">Login</Button>
                  
                </Typography>
            </form>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Signup;
