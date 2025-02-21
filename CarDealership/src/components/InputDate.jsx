export default function InputDate({ handleChange, children }) {
  return (
    <label>
      {children}
      <input onChange={handleChange} type="date" />
    </label>
  );
}
