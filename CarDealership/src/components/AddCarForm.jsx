import Select from "./Select";
import { carBrands } from "../data/carData";
import { useState } from "react";
import InputNum from "./InputNum";
import InputDate from "./InputDate";

export default function AddCarForm() {
  const [carInfo, setCarInfo] = useState({
    name: "",
    model: "",
    productionYear: "",
    registrationExpirationDate: "",
  });

  function handleCarBrandSelect(event) {
    setCarInfo((prev) => ({ ...prev, name: event.target.value, model: "" }));
  }

  function handleModelSelect(event) {
    const carData = carBrands.find((cb) => cb.name === carInfo.name).models;
    const carModelAndType = carData.find(
      (cd) => cd.name === event.target.value
    );
    setCarInfo((prev) => ({ ...prev, model: carModelAndType }));
  }

  function handleInputNumChange(event) {
    setCarInfo((prev) => ({ ...prev, productionYear: event.target.value }));
  }

  function handleInputDateChange(event) {
    setCarInfo((prev) => ({
      ...prev,
      registrationExpirationDate: event.target.value,
    }));
  }

  console.log(carInfo);

  return (
    <form>
      <Select
        options={carBrands}
        carInfo={carInfo.name}
        handleChange={handleCarBrandSelect}
      >
        Brend automobila:{" "}
      </Select>

      {carInfo.name && (
        <Select
          options={carBrands.find((cb) => cb.name === carInfo.name).models}
          carInfo={carInfo.model}
          handleChange={handleModelSelect}
        >
          Model automobila:{" "}
        </Select>
      )}

      <InputNum
        minValue="1886"
        maxValue={new Date().getFullYear()}
        handleChange={handleInputNumChange}
      >
        Godina proizvodnje:{" "}
      </InputNum>

      <InputDate handleChange={handleInputDateChange}>
        Datum isteka registracije:{" "}
      </InputDate>
      <button>Dodaj automobil</button>
    </form>
  );
}
