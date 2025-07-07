import PropertiesList from "@/components/catalogue/PropertiesList";
import { fetchActiveProperties } from "@/utils/fetchActiveProperties";
import { Suspense } from "react";

const PropertiesPage = () => {
  
  const propertiesPromise = fetchActiveProperties();

  return (
    <div>
      <h1>Properties</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <PropertiesList propertiesPromise={propertiesPromise} />
      </Suspense>
    </div>
  );
};

export default PropertiesPage;
