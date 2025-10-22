import { fetchFilters } from "@/utils/fetchFilters";
import Navigation from "./Navigation";
import MetricComponent from "../metric/MetricComponent";

const NavBar = () => {
  const filters = fetchFilters();

  return (
    <nav className="absolute z-50 w-full">
        <Navigation filtersPromise={filters}/>
        <MetricComponent name="visit_site"/>
    </nav>
  );
};

export default NavBar;
