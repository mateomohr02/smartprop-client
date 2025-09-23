import FeaturedPropertyCard from "./FeaturedPropertyCard";

const FeaturedProperties = () => {
  //fetch destacadas

  return (
    <div className="bg-contrast flex flex-col items-center pb-10">
      <h2 className="relative text-center -translate-y-18 text-contrast text-2xl bg-primary whitespace-nowrap">
        Propiedades Destacadas
      </h2>
    <div className="flex no-wrap gap-6">
      <FeaturedPropertyCard/>
      <FeaturedPropertyCard/>
      <FeaturedPropertyCard/>
    </div>
    </div>
  );
};

export default FeaturedProperties;
