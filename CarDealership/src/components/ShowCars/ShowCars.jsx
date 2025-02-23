import "./ShowCars.css";

import CarCard from "./CarCard";

export default function ShowCars({ cars, setCars }) {
  const sortedCars = [...cars].sort((a, b) => {
    if (b.productionYear !== a.productionYear) {
      return b.productionYear - a.productionYear;
    }
    if (a.brand !== b.brand) {
      return a.brand.localeCompare(b.brand);
    }

    return a.model.localeCompare(b.model);
  });

  return (
    <div className="cars-container">
      {sortedCars.map((car) => (
        <CarCard key={car.id} carData={car} setCars={setCars}>
          {car.brand}
        </CarCard>
      ))}
    </div>
  );
}
