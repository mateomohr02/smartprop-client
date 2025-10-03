import Image from "next/image";
import { Bed, Bath } from "lucide-react";
import Link from "next/link";

const PropertyCard = ({ linkTo, property }) => {
  return (
    <div className="w-[250px] rounded-lg border border-secondary overflow-hidden shadow-sm">
      <Link href={linkTo}>
      {/* Imagen */}
      <div className="w-full h-[150px] flex items-center justify-center border-b bg-gray-100">
        {property?.multimedia?.images?.length > 0 ? (
          <Image
            src={property.multimedia.images[0]}
            alt={property.title || "Imagen de la propiedad"}
            width={250}
            height={150}
            className="object-cover w-full h-full"
          />
        ) : (
          <span className="text-gray-400 text-sm">Sin imagen</span>
        )}
      </div>

      {/* Contenido */}
      <div className="pt-3 px-3 flex flex-col gap-1 text-sm">
        {/* Precio */}
        <p className="font-semibold text-gray-800">
          {property.priceFIAT} {property.price.toLocaleString()}
        </p>

        {/* Dirección */}
        <p className="text-gray-600 font-medium">
          Dirección 0000
        </p>

        {/* Ciudad y barrio */}
        <p className="text-gray-500 text-xs">
          {property.Neighborhood?.name}, {property.City?.name}
        </p>
      </div>

      {/* Amenities */}
      <div className="flex items-center gap-4 px-3 pb-3 py-1 text-gray-600 text-sm">
        <div className="flex items-center gap-1">
          <Bed size={16} /> <span>{property.bedrooms}</span>
        </div>
        <div className="flex items-center gap-1">
          <Bath size={16} /> <span>{property.bathrooms}</span>
        </div>
      </div>
      </Link>
    </div>
  );
};

export default PropertyCard;
