import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Snackbar, Alert } from '@mui/material'; 
import Navbar from '../components/navbar';
import '../styles/auth.css';
import { useAuth } from '../contexts/AuthContext';

const defaultTheme = createTheme();

export default function Authentication() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const [formState, setFormState] = useState(0); 
    const { login, register } = useAuth();

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        try {
            if (formState === 0) {
                await login(username, password);
                setMessage('Login successful');
            } else { 
                await register(username, password, name);
                setMessage('Registration successful');
            }
        } catch (err) {
            setError(err.message || 'An error occurred');
        }
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Navbar />
            <Grid container component="main" className="container" sx={{ height: '100vh' }}>
                <CssBaseline />
                <Grid item xs={12} sm={8} md={5} component={Box} elevation={6} className="form-container">
                    <Avatar className="avatar">
                        <LockOutlinedIcon />
                    </Avatar>
                    <div className="buttons-container">
                        <Button
                            variant={formState === 0 ? 'contained' : 'outlined'}
                            onClick={() => setFormState(0)}
                        >
                            Sign In
                        </Button>
                        <Button
                            variant={formState === 1 ? 'contained' : 'outlined'}
                            onClick={() => setFormState(1)}
                            className="signup-btn"
                        >
                            Sign Up
                        </Button>
                    </div>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        {formState === 1 && (
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="name"
                                label="Name"
                                name="name"
                                autoComplete="name"
                                autoFocus
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        )}
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="username"
                            label="Username"
                            name="username"
                            autoComplete="username"
                            autoFocus
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                            {formState === 0 ? 'Sign In' : 'Sign Up'}
                        </Button>
                    </Box>
                </Grid>
            </Grid>

         
            <Snackbar
                open={!!error}
                autoHideDuration={6000}
                onClose={() => setError('')}
            >
                <Alert onClose={() => setError('')} severity="error" sx={{ width: '100%' }}>
                    {error}
                </Alert>
            </Snackbar>

            <Snackbar
                open={!!message}
                autoHideDuration={6000}
                onClose={() => setMessage('')}
            >
                <Alert onClose={() => setMessage('')} severity="success" sx={{ width: '100%' }}>
                    {message}
                </Alert>
            </Snackbar>
        </ThemeProvider>
    );
}