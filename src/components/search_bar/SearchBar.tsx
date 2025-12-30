interface Props {
  value: string;
  onChange: (value: string) => void;
}

export const SearchBar = ({ value, onChange }: Props) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="🔍 Buscar libro por título..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="search-bar__input"
      />
    </div>
  );
};