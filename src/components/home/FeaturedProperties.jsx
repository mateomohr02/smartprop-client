import { fetchFeaturedProperties } from "@/utils/fetchFeaturedProperties";
import PropertyCard from "../catalogue/PropertyCard";

const FeaturedProperties = async () => {
  //fetch destacadas

  const featuredProperties = await fetchFeaturedProperties();

  return (
    <div className="bg-contrast flex flex-col items-center pb-10">
      <h2 className="relative text-center -translate-y-18 text-contrast text-2xl bg-primary whitespace-nowrap">
        Propiedades Destacadas
      </h2>
      <div className="flex no-wrap gap-6">
        {featuredProperties.map(property => (
            <PropertyCard key={property.id} linkTo={`/propiedades/${property?.slug}`} property={property}/>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProperties;
