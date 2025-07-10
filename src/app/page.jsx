import Hero from "@/components/home/Hero";
import QuickSearch from "@/components/home/QuickSearch";
import { fetchFilters } from "@/utils/fetchFilters";

const HomePage = () => {

  const filters = fetchFilters();

  return (
    <>
      <Hero/>
      <QuickSearch filtersPromise={filters}/>
    </>
  );
};

export default HomePage;
