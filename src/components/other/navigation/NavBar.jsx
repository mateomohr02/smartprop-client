import { fetchFilters } from "@/utils/fetchFilters";
import Navigation from "./Navigation";

const NavBar = () => {
  const filters = fetchFilters();

  return (
    <nav>
        <Navigation filtersPromise={filters}/>
    </nav>
  );
};

export default NavBar;
