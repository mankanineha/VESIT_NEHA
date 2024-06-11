// src/context/AuthContext.js

import { createContext, useReducer, useEffect, useContext, useState } from 'react';
import axios from 'axios';

const AuthContext = createContext();

const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            localStorage.setItem('token', action.payload.token);
            return { ...state, token: action.payload.token, isAuthenticated: true };
        case 'LOGOUT':
            localStorage.removeItem('token');
            return { ...state, token: null, isAuthenticated: false };
        case 'LOAD_USER':
            return { ...state, token: localStorage.getItem('token'), isAuthenticated: !!localStorage.getItem('token') };
        default:
            return state;
    }
};

export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, {
        token: localStorage.getItem('token'),
        isAuthenticated: !!localStorage.getItem('token'),
    });

    useEffect(() => {
        if (state.token) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${state.token}`;
        } else {
            delete axios.defaults.headers.common['Authorization'];
        }
    }, [state.token]);

    const login = async (formData) => {
        const res = await axios.post('http://localhost:5000/api/auth/login', formData);
        dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
    };

    const logout = () => dispatch({ type: 'LOGOUT' });

    return (
        <AuthContext.Provider value={{ ...state, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
export const useAuth = () => useContext(AuthContext); // Export useAuth here