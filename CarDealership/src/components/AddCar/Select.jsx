export default function Select({
  options,
  selectValue,
  handleChange,
  isDisabled,
  children,
}) {
  return (
    <div>
      <label>{children}</label>
      <select value={selectValue} onChange={handleChange} disabled={isDisabled}>
        <option value="">Odaberite opciju</option>
        {options.map((o) => (
          <option key={o.name} value={o.name}>
            {o.name}
          </option>
        ))}
      </select>
    </div>
  );
}
