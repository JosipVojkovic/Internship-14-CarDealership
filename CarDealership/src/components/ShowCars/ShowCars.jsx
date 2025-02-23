import "./ShowCars.css";

import CarCard from "./CarCard";
import Search from "./Search";
import { useState } from "react";

export default function ShowCars({ cars, setCars }) {
  const [brandSearch, setBrandSearch] = useState("");
  const [modelSearch, setModelSearch] = useState("");

  const filteredCars = cars.filter(
    (c) =>
      c.brand.toLowerCase().includes(brandSearch.toLowerCase()) &&
      c.model.toLowerCase().includes(modelSearch.toLowerCase())
  );

  const sortedCars = [...filteredCars].sort((a, b) => {
    if (b.productionYear !== a.productionYear) {
      return b.productionYear - a.productionYear;
    }
    if (a.brand !== b.brand) {
      return a.brand.localeCompare(b.brand);
    }

    return a.model.localeCompare(b.model);
  });

  function handleBrandChange(event) {
    setBrandSearch(event.target.value);
  }

  function handleModelChange(event) {
    setModelSearch(event.target.value);
  }

  return (
    <section className="show-cars-section">
      <div className="filter-nav">
        <h2>Filteri</h2>
        <div className="search-inputs-container">
          <Search onChange={handleBrandChange} searchValue={brandSearch}>
            Brend:{" "}
          </Search>
          <Search onChange={handleModelChange} searchValue={modelSearch}>
            Model:{" "}
          </Search>
        </div>
      </div>
      <div className="cars-container">
        {sortedCars.map((car) => (
          <CarCard key={car.id} carData={car} setCars={setCars}>
            {car.brand}
          </CarCard>
        ))}
      </div>
    </section>
  );
}
