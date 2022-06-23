import { useState } from "react";
import Header from "../../components/Header";
import Main from "../../components/Main";
import TextInput from "../../components/TextInput";
import Countries from "../../components/Countries";
import { allCountries } from "../../data/countries";
import { getNewId } from "../../services/idService";
import Country from "../../components/Country";

export default function CountriesPage() {
  const [countrieFilter, setCountrieFilter] = useState("");
  const [visitedCountries, setVisitedCountries] = useState([]);

  const filteredCountries =
    countrieFilter.length >= 3
      ? allCountries.filter(({ name }) => {
          return name
            .toLowerCase()
            .includes(countrieFilter.trim().toLowerCase());
        })
      : allCountries;

  function handleCountrieFilterChange(newValue) {
    setCountrieFilter(newValue);
  }

  function toogleVisitedCountry(countryId) {
    let newVisitedCountries = [...visitedCountries];
    const isCountryVisited = newVisitedCountries.indexOf(countryId) !== -1;
    if (isCountryVisited) {
      newVisitedCountries = newVisitedCountries.filter(
        (visitedCountrieId) => visitedCountrieId !== countryId
      );
    } else {
      newVisitedCountries.push(countryId);
    }
    setVisitedCountries(newVisitedCountries);
  }

  return (
    <div>
      <Header title="React Countries" />

      <Main>
        <TextInput
          id={getNewId()}
          inputLabel="Informe o nome do país:"
          inputValue={countrieFilter}
          inputFocus
          onInputChange={handleCountrieFilterChange}
        />
        <Countries>
          <h2 className="text-center font-semibold">
            {`${filteredCountries.length} ${
              filteredCountries.length === 1
                ? "País encontrado"
                : "Países econtrados"
            }`}
          </h2>
          <h2 className="text-center font-semibold">
            {`${visitedCountries.length} ${
              filteredCountries.length === 1
                ? "País vistado"
                : "Países visitados"
            }`}
          </h2>
          {filteredCountries.map((country) => {
            const isVisited = visitedCountries.indexOf(country.id) !== -1;
            return (
              <Country
                key={country.id}
                country={country}
                onCountryClick={toogleVisitedCountry}
                isVisited={isVisited}
              />
            );
          })}
        </Countries>
      </Main>
    </div>
  );
}
