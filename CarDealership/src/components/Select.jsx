function Select({ options, selectValue, handleClick, children }) {
  return (
    <div>
      <label>{children}</label>
      <select value={selectValue} onChange={handleClick}>
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

export default Select;
