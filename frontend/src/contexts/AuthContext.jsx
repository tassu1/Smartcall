import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import httpStatus from 'http-status';
import server from '../environment';
import { jwtDecode } from 'jwt-decode';

export const AuthContext = createContext({});

const client = axios.create({
    baseURL: `${server}/api/v1/users`,
});

export const AuthProvider = ({ children }) => {
    const [userData, setUserData] = useState(null);
    const [userHistory, setUserHistory] = useState([]);
    const router = useNavigate();

    const register = async (name, username, password) => {
        try {
            const request = await client.post('/register', {
                name,
                username,
                password,
            });

            if (request.status === httpStatus.CREATED) {
                console.log("User registered successfully");
                router('/login'); // Redirect to login after registration
            }
        } catch (err) {
            const errorMessage = err.response?.data?.message || 'Registration failed.';
            throw new Error(errorMessage);
        }
    };

    const handleLogin = async (username, password) => {
        try {
            const request = await client.post('/login', {
                username,
                password,
            });

            if (request.status === httpStatus.OK) {
                localStorage.setItem('token', request.data.token);
                setUserData(request.data.user);
                router('/home');
            }
        } catch (err) {
            const errorMessage = err.response?.data?.message || 'Login failed. Please check your credentials.';
            throw new Error(errorMessage);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        setUserData(null);
        router('/login');
    };

    const isAuthenticated = () => {
        const token = localStorage.getItem('token');
        if (!token) return false;

        try {
            const decodedToken = jwtDecode(token);
            const currentTime = Date.now() / 1000;
            return decodedToken.exp > currentTime;
        } catch (err) {
            return false;
        }
    };

    const addToUserHistory = async (meetingCode) => {
        try {
            const token = localStorage.getItem('token');
            const request = await client.post('/history', { meetingCode }, {
                headers: { Authorization: `Bearer ${token}` },
            });

            if (request.status === httpStatus.CREATED) {
                setUserHistory((prevHistory) => [...prevHistory, meetingCode]);
                console.log("Meeting code added to history:", meetingCode);
            }
        } catch (error) {
            console.error("Failed to add to history:", error);
            throw error;
        }
    };

    const data = {
        userData,
        setUserData,
        userHistory,
        register, 
        login: handleLogin,
        logout: handleLogout,
        isAuthenticated,
        addToUserHistory,
    };

    return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);