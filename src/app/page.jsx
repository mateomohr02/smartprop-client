import FeaturedProperties from "@/components/home/FeaturedProperties";
import Hero from "@/components/home/Hero";
import QuickSearch from "@/components/home/QuickSearch";
import Services from "@/components/home/Services";
import BlogSection from "@/components/home/BlogSection";
import { fetchFilters } from "@/utils/fetchFilters";

const HomePage = () => {

  const filters = fetchFilters();

  return (
    <>
      <Hero/>
      <QuickSearch filtersPromise={filters}/>
      <FeaturedProperties/>
      <Services/>
      <BlogSection/>
    </>
  );
};

export default HomePage;
