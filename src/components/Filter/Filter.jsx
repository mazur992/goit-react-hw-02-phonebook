import css from './Filter.module.css';
export default function Filter({ value, onChange }) {
  return (
    <label>
      Find contacts by name
      <input type="text" name="filter" value={value} onChange={onChange} />
    </label>
  );
}
