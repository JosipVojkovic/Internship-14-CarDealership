export default function InputNum({
  maxValue,
  minValue,
  handleChange,
  children,
}) {
  return (
    <label>
      {children}
      <input
        min={minValue}
        max={maxValue}
        onChange={handleChange}
        type="number"
      />
    </label>
  );
}
