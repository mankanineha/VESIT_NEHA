import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createRoot } from 'react-dom/client';
import { RestaurantProvider } from './components/Context/useContext';
// Create a root using the new API from React 18
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <RestaurantProvider>
        <App />
    </RestaurantProvider>,
);