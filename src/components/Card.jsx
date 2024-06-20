import React, { useContext, useState } from "react";
import { data } from "../assets/data";
import { textSplit } from "../helper/helper";
import { FilterContext } from "./FilterContext";

const Card = ({ currentPage, itemsPerPage }) => {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = currentPage * itemsPerPage;

  const { filters } = useContext(FilterContext);

  // const [filters, setFilters] = useState({
  //   language: "",
  //   country: "",
  //   genre: "",
  // });

  const filteredData = data.filter((item) => {
    const languageMatch =
      !filters.language || item.movielanguages.includes(filters.language);
    const countryMatch =
      !filters.country || item.moviecountries.includes(filters.country);
    const genreMatch =
      !filters.genre || item.moviegenres.includes(filters.genre);
    return languageMatch && countryMatch && genreMatch;
  });
  // Slice the data array to get the items for the current page
  const currentItems = filteredData.slice(startIndex, endIndex);

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 flex-wrap mt-3 place-items-center">
      {currentItems.map((item, id) => (
        <div className="card w-72 h-[35rem] bg-base-100 shadow-xl m-2" key={id}>
          <figure className="">
            <img
              src={item.moviemainphotos}
              alt={item.movietitle}
              className="rounded-xl w-full"
            />
          </figure>
          <div className="card-body items-center text-center p-3">
            <h2 className="card-title">{item.movietitle}</h2>
            <h4 className="card-subtitle">
              {" "}
              <b>imdb-id:</b>
              {item.imdbmovieid}
            </h4>
            <p>{item.moviegenres.join(", ")}</p>
            <p>{textSplit(item.movielanguages).join(",")}</p>
            <p>{textSplit(item.moviecountries).join(",")}</p>
            {/* Adjust the description as needed */}

            <div className="card-actions">
              <button className="btn btn-primary">Watch Now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
