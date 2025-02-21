export default function InputDate({ handleChange, children }) {
  return (
    <div>
      <label>{children}</label>
      <input onChange={handleChange} type="date" />
    </div>
  );
}
