export default function CarCard({ carData, children }) {
  return (
    <div>
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
        {carData.registrationExpirationDate}
      </p>
    </div>
  );
}
