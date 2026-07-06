import "./SearchBar.css";

export default function SearchBar({ value, onChange }) {
  return (
    <input
      className="search"
      type="text"
      placeholder="Search..."
      value={value}
      onChange={onChange}
    />
  );
}