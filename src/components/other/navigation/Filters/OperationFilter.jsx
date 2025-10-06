import { ChevronDown } from "lucide-react";

const OperationFilter = ({ operation, setOperation }) => {
  return (
    <div className="relative w-full">
      <p className="flex justify-between items-center">Operación: <span className={`${operation ? "text-gray-500": "text-red-500" } text-sm`}>Obligatiorio*</span></p>
      <div>
        <div className="relative">
          <select
            name="operation"
            value={operation || ""}
            onChange={(e) => setOperation(e.target.value)}
            className="appearance-none w-full py-2 border-2 border-secondary rounded-lg px-3 pr-8 bg-white text-gray-700"
          >
            <option value="" disabled>
              Seleccione la Operación
            </option>
            <option value="alquilar">Alquilar</option>
            <option value="comprar">Comprar</option>
          </select>

          <ChevronDown
            className="absolute right-3 top-1/2 -translate-y-1/2 text-secondary pointer-events-none"
            size={18}
          />
        </div>
      </div>
      
    </div>
  );
};

export default OperationFilter;
