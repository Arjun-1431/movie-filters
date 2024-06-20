import { useState } from "react";
import Navbar from "./components/Navbar";
import CardWithPagination from "./components/CardPerPagination";
import { FilterContext } from "./components/FilterContext";

function App() {
  const [filters, setFilters] = useState({
    language: "",
    country: "",
    genre: "",
  });

  const handleFilterChange = (newFilters) => {
    setFilters({
      ...filters,
      ...newFilters,
    });
  };

  return (
    <FilterContext.Provider value={{ handleFilterChange, filters }}>
      <Navbar onFilterChange={handleFilterChange} />
      {/* <Carousel /> */}
      <div className=" justify-center items-center ">
        <CardWithPagination itemsPerPage={9} />
      </div>
    </FilterContext.Provider>
  );
}

export default App;
