import { useState } from "react";
import AddCarForm from "./components/AddCar/AddCarForm";
import ShowCars from "./components/ShowCars/ShowCars";
import { carsForSale } from "./data/carsForResale";

export default function App() {
  const [cars, setCars] = useState(carsForSale);

  return (
    <>
      <AddCarForm cars={cars} setCars={setCars} />
      <ShowCars cars={cars} setCars={setCars} />
    </>
  );
}
