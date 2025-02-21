import Select from "./Select";
import { carBrands } from "../data/carData";
import { useState } from "react";

function AddCarForm() {
  const [carInfo, setCarInfo] = useState({ name: "", model: "" });

  function handleCarBrandSelect(event) {
    setCarInfo({ name: event.target.value, model: "" });
  }

  function handleModelSelect(event) {
    const carData = carBrands.find((cb) => cb.name === carInfo.name).models;
    const carModelAndType = carData.find(
      (cd) => cd.name === event.target.value
    );
    setCarInfo((prev) => ({ ...prev, model: carModelAndType }));
  }

  console.log(carInfo);

  return (
    <form>
      <Select
        options={carBrands}
        carInfo={carInfo.name}
        handleClick={handleCarBrandSelect}
      >
        Izaberi brend automobila:{" "}
      </Select>

      {carInfo.name && (
        <Select
          options={carBrands.find((cb) => cb.name === carInfo.name).models}
          carInfo={carInfo.model}
          handleClick={handleModelSelect}
        >
          Izaberi model automobila:{" "}
        </Select>
      )}
      <button>Dodaj automobil</button>
    </form>
  );
}

export default AddCarForm;
