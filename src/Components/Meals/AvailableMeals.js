import React from "react";
import "./AvailableMeals.css";
import MealItem from "./MealItem/MealItem";
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 21.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];
export default function AvailableMeals() {
  return (
    <div className="availableMeals">
      <ul>
        {DUMMY_MEALS.map((item) => (
          <MealItem
            id={item.id}
            name={item.name}
            description={item.description}
            price={item.price}
          />
        ))}
      </ul>
    </div>
  );
}
