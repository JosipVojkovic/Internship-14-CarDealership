import "./AddCarForm.css";

import { carBrands } from "../../data/carData";
import { useState } from "react";

import Select from "./Select";
import Input from "./Input";

export default function AddCarForm({ cars, setCars }) {
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
      const newId = prev.length ? prev[prev.length - 1].id + 1 : 1;

      return [
        ...prev,
        {
          id: newId,
          brand: carInfo.name,
          model: carInfo.model.name,
          type: carInfo.model.type,
          productionYear: carInfo.productionYear,
          registrationExpirationDate: carInfo.registrationExpirationDate,
        },
      ];
    });

    setCarInfo({
      name: "",
      model: "",
      productionYear: "",
      registrationExpirationDate: "",
    });
  }

  console.log(cars);

  return (
    <form className="car-entry">
      <h1>Autosalon</h1>
      <Select
        options={carBrands}
        selectValue={carInfo.name}
        handleChange={handleCarBrandSelect}
        isDisabled={cars.length > 10}
      >
        Brend automobila:{" "}
      </Select>

      {carInfo.name ? (
        <Select
          options={carBrands.find((cb) => cb.name === carInfo.name).models}
          selectValue={carInfo.model.name}
          handleChange={handleModelSelect}
          isDisabled={cars - length > 10}
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
        inputValue={carInfo.productionYear}
        minValue="1886"
        maxValue={new Date().getFullYear()}
        handleChange={handleInputNumChange}
        isDisabled={cars.length > 10}
      >
        Godina proizvodnje:{" "}
      </Input>

      <Input
        type="date"
        inputValue={carInfo.registrationExpirationDate}
        minValue={new Date(Date.now() + 86400000).toISOString().split("T")[0]}
        maxValue={
          new Date(new Date().setFullYear(new Date().getFullYear() + 1))
            .toISOString()
            .split("T")[0]
        }
        handleChange={handleInputDateChange}
        isDisabled={cars.length > 10}
      >
        Datum isteka registracije:{" "}
      </Input>
      {invalidInput && (
        <p className="invalid-input">
          Molimo vas da ispunite sva polja prije nego što nastavite.
        </p>
      )}
      {cars.length > 10 && (
        <p className="invalid-input">
          Dosegnut je maksimalan broj vozila (10). Nije moguće dodati više
          automobila.
        </p>
      )}
      <button
        onClick={addCarAction}
        disabled={cars.length > 10}
        className={cars.length > 10 ? "disabled" : ""}
        type="button"
      >
        Dodaj automobil
      </button>
    </form>
  );
}
