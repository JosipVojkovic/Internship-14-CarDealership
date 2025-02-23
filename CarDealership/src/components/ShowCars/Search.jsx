export default function Search({ onChange, searchValue, children }) {
  return (
    <div>
      <label>{children}</label>
      <input type="search" onChange={onChange} value={searchValue} />
    </div>
  );
}
