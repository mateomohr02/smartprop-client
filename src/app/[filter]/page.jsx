import FilteredPropertiesList from "@/components/filterPage/FilteredProperteisList";
import MetricComponent from "@/components/other/metric/MetricComponent";
import { fetchFilteredProperties } from "@/utils/fetchFilteredProperties";

const FilterPage = async ({ params, searchParams }) => {

  const {filter} = await params;
  const extraFilters = await searchParams;

  const properties = await fetchFilteredProperties(filter, extraFilters);   
  
  return (
    <div className="bg-contrast min-h-screen">
      <FilteredPropertiesList filter={filter} properties={properties} />
      <MetricComponent name="filter" ids={properties} metadata={{filter, extraFilters}}/>
    </div>
  )
}

export default FilterPage