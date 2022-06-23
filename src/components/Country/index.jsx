import CountryItem from "../CountryItem";

export default function Country({
  country = null,
  onCountryClick = null,
  isVisited = false,
}) {
  const demographicDensity = country.population / country.area;
  const { id, name, capital, region, population, area } = country;

  function handleCountryClick() {
    if (onCountryClick) {
      onCountryClick(id);
    }
  }

  return (
    <div
      className={`${
        isVisited && "bg-green-100"
      } border p-2 m-2 flex flex-row items-center space-x-2 cursor-pointer`}
      onClick={handleCountryClick}
    >
      {/* <img className="w-48" src={flag} alt={`Flag of ${name}`} /> */}
      <ul>
        <li>
          <CountryItem value={name} label="Nome" />
        </li>
        <li>
          <CountryItem value={capital} label="Capital" />
        </li>
        <li>
          <CountryItem value={region} label="Região" />
        </li>
        <li>
          <CountryItem value={population} label="População" />
        </li>
        <li>
          <CountryItem value={area} label="Área" />
        </li>
        <li>
          <CountryItem
            value={demographicDensity}
            label="Densidade Demográfica"
          />
        </li>
      </ul>
    </div>
  );
}
