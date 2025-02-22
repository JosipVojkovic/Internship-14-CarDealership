import "./AddCarForm.css";

import { carBrands } from "../../data/carData";
import { useState } from "react";

import Select from "./Select";
import Input from "./Input";

export default function AddCarForm({ setCars }) {
  const [carInfo, setCarInfo] = useState({
    name: "",
    model: "",
    productionYear: "",
    registrationExpirationDate: "",
  });

  const [invalidInput, setInvalidInput] = useState(false);

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

  function addCarAction() {
    if (Object.values(carInfo).some((value) => !value)) {
      setInvalidInput(true);
      return;
    }

    setInvalidInput(false);
    setCars((prev) => {
      const lastId = prev[prev.length - 1].id;

      return [
        ...prev,
        {
          id: lastId + 1,
          brand: carInfo.name,
          model: carInfo.model.name,
          type: carInfo.model.type,
          productionYear: carInfo.productionYear,
          registrationExpirationDate: carInfo.registrationExpirationDate,
        },
      ];
    });
  }

  return (
    <form className="car-entry">
      <h1>Autosalon</h1>
      <Select
        options={carBrands}
        carInfo={carInfo.name}
        handleChange={handleCarBrandSelect}
      >
        Brend automobila:{" "}
      </Select>

      {carInfo.name ? (
        <Select
          options={carBrands.find((cb) => cb.name === carInfo.name).models}
          carInfo={carInfo.model}
          handleChange={handleModelSelect}
        >
          Model automobila:{" "}
        </Select>
      ) : (
        <div>
          <label>Model automobila: </label>
          <select disabled>
            <option>Odaberite opciju</option>
          </select>
        </div>
      )}

      <Input
        type="number"
        minValue="1886"
        maxValue={new Date().getFullYear()}
        handleChange={handleInputNumChange}
      >
        Godina proizvodnje:{" "}
      </Input>

      <Input
        type="date"
        minValue={new Date(Date.now() + 86400000).toISOString().split("T")[0]}
        maxValue={
          new Date(new Date().setFullYear(new Date().getFullYear() + 1))
            .toISOString()
            .split("T")[0]
        }
        handleChange={handleInputDateChange}
      >
        Datum isteka registracije:{" "}
      </Input>
      {invalidInput && (
        <p className="invalid-input">
          Molimo vas da ispunite sva polja prije nego što nastavite.
        </p>
      )}
      <button onClick={addCarAction} type="button">
        Dodaj automobil
      </button>
    </form>
  );
}
