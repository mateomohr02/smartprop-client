import FeaturedProperties from "@/components/home/FeaturedProperties";
import Hero from "@/components/home/Hero";
import QuickSearch from "@/components/home/QuickSearch";
import Services from "@/components/home/Services";
import { fetchFilters } from "@/utils/fetchFilters";

const HomePage = () => {

  const filters = fetchFilters();

  return (
    <>
      <Hero/>
      <QuickSearch filtersPromise={filters}/>
      <FeaturedProperties/>
      <Services/>
    </>
  );
};

export default HomePage;
