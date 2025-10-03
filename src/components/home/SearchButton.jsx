"use client";

import { useRouter } from "next/navigation";

const SearchButton = ({ operation, propertyType, locationSlug, locationType, location }) => {

  const router = useRouter();

  const handleSearch = () => {

    locationType === "Ciudad"
      ? router.push(`/${operation}-${propertyType}-en-la-ciudad-de-${locationSlug}`)
      : router.push(`/${operation}-${propertyType}-en-el-barrio-de-${locationSlug}`);
  }


  return (
    <button className="w-full text-center bg-third rounded-lg py-2 px-4 text-contrast font-medium" onClick={handleSearch}>
      Buscar
    </button>
  );
};

export default SearchButton;
