export default function InputNum({
  maxValue,
  minValue,
  handleChange,
  children,
}) {
  return (
    <div>
      <label>{children}</label>
      <input
        min={minValue}
        max={maxValue}
        onChange={handleChange}
        type="number"
      />
    </div>
  );
}
