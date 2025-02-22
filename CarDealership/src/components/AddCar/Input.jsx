export default function InputNum({
  type,
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
        type={type}
      />
    </div>
  );
}
