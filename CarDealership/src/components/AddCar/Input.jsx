export default function InputNum({
  type,
  inputValue,
  maxValue,
  minValue,
  handleChange,
  isDisabled,
  children,
}) {
  return (
    <div>
      <label>{children}</label>
      <input
        value={inputValue}
        min={minValue}
        max={maxValue}
        onChange={handleChange}
        type={type}
        disabled={isDisabled}
      />
    </div>
  );
}
