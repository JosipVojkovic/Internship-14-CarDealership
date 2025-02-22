import "./ShowCars.css";

import { carsForSale } from "../../data/carsForResale";

import CarCard from "./CarCard";
import { useState } from "react";

export default function ShowCars({ cars }) {
  return (
    <div className="cars-container">
      {cars.map((car) => (
        <CarCard key={car.id} carData={car}>
          {car.brand}
        </CarCard>
      ))}
    </div>
  );
}
