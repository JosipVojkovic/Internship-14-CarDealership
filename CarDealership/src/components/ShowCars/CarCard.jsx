import trashIcon from "../../assets/trash-icon.svg";

import { formatDate, isExpiringSoon } from "../../helpers/dateHelpers";

export default function CarCard({ carData, setCars, children }) {
  function handleDeleteCar(carId) {
    setCars((prev) => prev.filter((c) => c.id !== carId));
  }

  return (
    <div
      className={
        isExpiringSoon(carData.registrationExpirationDate) ? "red-border" : ""
      }
    >
      <h3>{children}</h3>
      <p>
        <strong>Model:</strong> {carData.model}
      </p>
      <p>
        <strong>Tip:</strong> {carData.type}
      </p>
      <p>
        <strong>Godina proizvodnje:</strong> {carData.productionYear}
      </p>
      <p>
        <strong>Datum isteka registracije:</strong>{" "}
        {formatDate(carData.registrationExpirationDate)}
      </p>
      <img
        src={trashIcon}
        alt="Ikona kante za smeće"
        className="trash-icon"
        onClick={() => handleDeleteCar(carData.id)}
      />
    </div>
  );
}
