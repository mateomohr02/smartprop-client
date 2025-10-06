import PropertyCard from "@/components/catalogue/PropertyCard";
import Link from "next/link";

const FilteredProperteisList = ({ filter, properties }) => {
  console.log(filter);

  const link = "/propiedades";

  return (
    <div className="py-4">
      <h1 className="mb-4 text-xl px-4">Resultados de la búsqueda</h1>
      <div className="flex flex-col gap-4 items-center justify-center">
        {properties?.length > 0 ? (
          properties?.map((property) => (
            <PropertyCard
              key={property.id}
              linkTo={`/propiedades/${property.slug}`}
              property={property}
            />
          ))
        ) : (
          <p className="px-4 text-center">
            No se encontraron resultados para la búsqueda. 
            Por favor intente realizando una búsqueda diferente o consulte todas nuestras propiedades <strong><Link className="text-blue-400 hover:text-blue-600" href="/propiedades"> aquí </Link></strong>.
          </p>
        )}
      </div>
    </div>
  );
};

export default FilteredProperteisList;
