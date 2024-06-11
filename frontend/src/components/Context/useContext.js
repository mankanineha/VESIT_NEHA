import { createContext, useContext, useState } from "react";

const RestaurantContext = createContext();

const RestaurantProvider = ({ children }) => {
    const [selectedItems, setSelectedItems] = useState([]);
    const [location, setLocation] = useState();
    const [rating, setRating] = useState();

    const data = {
        selectedItems,
        setSelectedItems,
        location,
        setLocation,
        rating,
        setRating,
    };

    return (
        <RestaurantContext.Provider value={data}>
            {children}
        </RestaurantContext.Provider>
    );
};

const useRestaurantContext = () => {
    const context = useContext(RestaurantContext);
    if (!context) {
        throw new Error("useRestaurantContext must be used within a RestaurantProvider");
    }
    return context;
};

export { RestaurantProvider, useRestaurantContext };
export default RestaurantContext;
