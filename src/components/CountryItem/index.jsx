export default function CountryItem({ value = null, label = null }) {
  return (
    <span className="text-sm">
      <strong>{label}: </strong>
      {value}
    </span>
  );
}
