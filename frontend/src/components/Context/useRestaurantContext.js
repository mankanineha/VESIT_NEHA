import { createContext, useContext, useState } from 'react';

const RestaurantContext = createContext();

export const RestaurantProvider = ({ children }) => {
    const [selectedItems, setSelectedItems] = useState([]);
    const [location, setLocation] = useState('');
    const [rating, setRating] = useState(0);

    return (
        <RestaurantContext.Provider value={{ selectedItems, setSelectedItems, location, setLocation, rating, setRating }}>
            {children}
        </RestaurantContext.Provider>
    );
};

export const useRestaurantContext = () => {
    const context = useContext(RestaurantContext);
    if (!context) {
        throw new Error('useRestaurantContext must be used within a RestaurantProvider');
    }
    return context;
};
