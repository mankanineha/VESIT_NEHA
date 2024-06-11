import { useState, createContext, useContext } from 'react';

// Create a context
const RestaurantContext = createContext();

// Create a provider component
export const useRestaurantProvider = ({ children }) => {
    const [selectedItems, setSelectedItems] = useState([]);
    const [location, setLocation] = useState('');
    const [rating, setRating] = useState('');

    const value = {
        selectedItems,
        setSelectedItems,
        location,
        setLocation,
        rating,
        setRating
    };

    return (
        <RestaurantContext.Provider value={value}>
            {children}
        </RestaurantContext.Provider>
    );
};

// Create a hook to use the context
export const useRestaurantContext = () => {
    const context = useContext(RestaurantContext);
    if (!context) {
        throw new Error('useRestaurantContext must be used within a RestaurantProvider');
    }
    return context;
};
