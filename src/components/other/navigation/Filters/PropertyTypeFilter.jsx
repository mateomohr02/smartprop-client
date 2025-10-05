import { ChevronDown } from "lucide-react";

const PropertyTypeFilter = ({ options, propertyType, setPropertyType }) => {
  return (
    <div className="relative w-full">
      <p className="mb-1">Inmueble:</p>

      <div className="relative">
        <select
          name="propertyType"
          value={propertyType || ""}
          onChange={(e) => setPropertyType(e.target.value)}
          className="appearance-none w-full py-2 border-2 border-secondary rounded-lg px-3 pr-8 bg-white text-gray-700"
        >
          <option value="" disabled>
            Tipo de Propiedad
          </option>
          {options.availablePropertyTypes.map((p) => (
            <option key={p.slug} value={p.slug}>
              {p.name}
            </option>
          ))}
        </select>

        <ChevronDown
          className="absolute right-3 top-1/2 -translate-y-1/2 text-secondary pointer-events-none"
          size={18}
        />
      </div>
    </div>
  );
};

export default PropertyTypeFilter;
