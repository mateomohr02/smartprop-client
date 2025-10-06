import FilteredPropertiesList from "@/components/filterPage/FilteredProperteisList";
import { fetchFilteredProperties } from "@/utils/fetchFilteredProperties";

const FilterPage = async ({ params, searchParams }) => {

  const {filter} = await params;
  const extraFilters = await searchParams;

  console.log(extraFilters, 'extraFilters');

  const properties = await fetchFilteredProperties(filter, extraFilters);   

  console.log(properties);
  
  return (
    <div className="bg-contrast min-h-screen">
      <FilteredPropertiesList filter={filter} properties={properties} />
    </div>
  )
}

export default FilterPage