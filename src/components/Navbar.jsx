import React, { useContext, useState } from "react";
import { data } from "../assets/data";
import { FilterContext } from "./FilterContext";

function Navbar({ onFilterChange }) {
  const [languageFilter, setLanguageFilter] = useState("");
  const [countryFilter, setCountryFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("");

  // Event handler for language dropdown change
  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    setLanguageFilter(selectedLanguage); // Update language filter state
    // Call onFilterChange with updated filter values
    onFilterChange({
      language: selectedLanguage,
      country: countryFilter,
      genre: genreFilter,
    });
  };

  // Event handler for country dropdown change
  const handleCountryChange = (event) => {
    const selectedCountry = event.target.value;
    setCountryFilter(selectedCountry); // Update country filter state
    // Call onFilterChange with updated filter values
    onFilterChange({
      language: languageFilter,
      country: selectedCountry,
      genre: genreFilter,
    });
  };

  // Event handler for genre dropdown change
  const handleGenreChange = (event) => {
    const selectedGenre = event.target.value;
    setGenreFilter(selectedGenre); // Update genre filter state
    // Call onFilterChange with updated filter values
    onFilterChange({
      language: languageFilter,
      country: countryFilter,
      genre: selectedGenre,
    });
  };

  const Language = Array.from(
    new Set(
      data.flatMap((item) => {
        return Array.from(item.movielanguages.flat());
      })
    )
  );
  const Country = Array.from(
    new Set(
      data.flatMap((item) => {
        return Array.from(item.moviecountries.flat());
      })
    )
  );
  const Genere = Array.from(
    new Set(
      data.flatMap((item) => {
        return Array.from(item.moviegenres.flat());
      })
    )
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <button
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <label htmlFor="languageFilter">Language</label>

              <select
                id="languageFilter"
                value={languageFilter}
                onChange={handleLanguageChange}
              >
                <option value="">All</option>
                {Language.map((language, index) => (
                  <option key={index} value={language}>
                    {language}
                  </option>
                ))}
              </select>
            </li>
            <li>
              <label htmlFor="countryFilter">Country</label>

              <select
                id="countryFilter"
                value={countryFilter}
                onChange={handleCountryChange}
              >
                <option value="">All</option>
                {Country.map((country, index) => (
                  <option key={index} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </li>
            <li className="mr-5">
              <label htmlFor="genreFilter">Genre</label>

              <select
                id="genreFilter"
                value={genreFilter}
                onChange={handleGenreChange}
              >
                <option value="">All</option>
                {Genere.map((genre, index) => (
                  <option key={index} value={genre}>
                    {genre}
                  </option>
                ))}
              </select>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Movie</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex space-x-4 mt-3 z-[1] p-2 shadow bg-base-100 rounded-box">
          <li>
            <label htmlFor="languageFilter">Language</label>
            <br />
            <select
              id="languageFilter"
              value={languageFilter}
              onChange={handleLanguageChange}
            >
              <option value="">All</option>
              {Language.map((language, index) => (
                <option key={index} value={language}>
                  {language}
                </option>
              ))}
            </select>
          </li>
          <li className="mr-5">
            <label htmlFor="countryFilter">Country</label>
            <br />
            <select
              id="countryFilter"
              value={countryFilter}
              onChange={handleCountryChange}
            >
              <option value="">All</option>
              {Country.map((country, index) => (
                <option key={index} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </li>
          <li className="mr-5">
            <label htmlFor="genreFilter">Genre</label>
            <br />
            <select
              id="genreFilter"
              value={genreFilter}
              onChange={handleGenreChange}
            >
              <option value="">All</option>
              {Genere.map((genre, index) => (
                <option key={index} value={genre}>
                  {genre}
                </option>
              ))}
            </select>
          </li>
        </ul>
      </div>

      <div className="navbar-end">{/* <a className="btn">Button</a> */}</div>
    </div>
  );
}

export default Navbar;
