import PropertiesList from "@/components/catalogue/PropertiesList";
import { fetchActiveProperties } from "@/utils/fetchActiveProperties";
import { Suspense } from "react";

const PropertiesPage = () => {
  
  const propertiesPromise = fetchActiveProperties();

  return (
    <div className="bg-contrast pt-6">
      <h1 className="text-center text-xl text-secondary">Propiedades</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <PropertiesList propertiesPromise={propertiesPromise} />
      </Suspense>
    </div>
  );
};

export default PropertiesPage;
