import { fetchFilters } from "@/utils/fetchFilters";
import Navigation from "./Navigation";

const NavBar = () => {
  const filters = fetchFilters();

  return (
    <nav className="absolute z-50 w-full">
        <Navigation filtersPromise={filters}/>
    </nav>
  );
};

export default NavBar;
