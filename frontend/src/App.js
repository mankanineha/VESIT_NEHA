import React from 'react';
import style from "./App.module.css";
import { Form } from "react-bootstrap";
import NavBar from "./NavBar";
import CardItem from "./components/RestaurantCard/Card";
// Adjust this import based on whether useRestaurantContext is default or named export
//import { useRestaurantContext } from './components/Hooks/useRestaurant'; // named export
// or
import { useRestaurantContext } from './components/Context/useContext';

const options = [
    { value: "North Indian", label: "North Indian" },
    { value: "South Indian", label: "South Indian" },
    { value: "Chinese", label: "Chinese" },
    { value: "Desserts", label: "Desserts" },
    { value: "Italian", label: "Italian" },
    { value: "Oriental", label: "Oriental" },
    { value: "Pastas", label: "Pastas" },
    { value: "Pizzas", label: "Pizzas" },
    { value: "Japanese", label: "Japanese" },
    { value: "Sushi", label: "Sushi" },
    { value: "Barbecue", label: "Barbecue" },
    { value: "Steak", label: "Steak" },
    { value: "Seafood", label: "Seafood" },
];

const CuisineSelector = ({ selectedItems, handleCheckboxChange }) => (
    <Form>
        <Form.Label>Select Cuisines:</Form.Label>
        {options.map((option) => (
            <Form.Check
                key={option.value}
                type="checkbox"
                id={option.value}
                label={option.label}
                checked={selectedItems.includes(option.value)}
                onChange={() => handleCheckboxChange(option.value)}
            />
        ))}
    </Form>
);

const LocationSelector = ({ setLocation }) => (
    <Form.Select
        aria-label="Location"
        onChange={(e) => setLocation(e.target.value)}
    >
        <option hidden>Select Location</option>
        <option value="Hyderabad">Hyderabad</option>
        <option value="Banglore">Banglore</option>
        <option value="Mumbai">Mumbai</option>
        <option value="Delhi">Delhi</option>
        <option value="Pune">Pune</option>
        <option value="Chennai">Chennai</option>
    </Form.Select>
);

const RatingSelector = ({ setRating }) => (
    <Form.Select
        aria-label="Default select example"
        onChange={(e) => setRating(e.target.value)}
    >
        <option hidden>Select Rating</option>
        <option value="3">3 above</option>
        <option value="4">4 above</option>
    </Form.Select>
);

const App = () => {
    const { selectedItems, setSelectedItems, setLocation, setRating } = useRestaurantContext();

    const handleCheckboxChange = (value) => {
        setSelectedItems((prevSelectedItems) =>
            prevSelectedItems.includes(value)
                ? prevSelectedItems.filter((item) => item !== value)
                : [...prevSelectedItems, value]
        );
    };

    return (
        <div className="App">
            <NavBar />
            <div>
                <div className={style.headers}>
                    <div className={style.locationContainer}>
                        <LocationSelector setLocation={setLocation} />
                    </div>
                    <div className={style.cuisinesContainer}>
                        <CuisineSelector
                            selectedItems={selectedItems}
                            handleCheckboxChange={handleCheckboxChange}
                        />
                    </div>
                    <div className={style.ratingContainer}>
                        <RatingSelector setRating={setRating} />
                    </div>
                </div>
            </div>
            <div className={style.restaurants}>
                <h3 >Restaurants</h3>
                <CardItem />
            </div>
        </div>
    );
}

export default App;
