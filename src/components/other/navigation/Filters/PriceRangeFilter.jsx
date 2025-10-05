const PriceRangeFilter = ({
  priceRange,
  setPriceRange,
  priceFIAT,
  setPriceFIAT,
}) => {
  const handleChange = (index, value) => {
    const newRange = [...priceRange];
    newRange[index] = value ? Number(value) : null;
    setPriceRange(newRange);
  };

  return (
    <div className="flex flex-col w-full">
      <p className="my-1">Precio:</p>

      {/* Inputs de rango de precio */}
      <div className="flex items-center gap-2">
        <input
          type="number"
          placeholder="Min."
          value={priceRange[0] || ""}
          onChange={(e) => handleChange(0, e.target.value)}
          className="w-full py-2 px-2 border-2 border-secondary rounded-lg text-gray-600 text-sm focus:outline-none focus:border-black appearance-none"
        />
        <span className="text-gray-500">
          <strong>-</strong>
        </span>
        <input
          type="number"
          placeholder="Max."
          value={priceRange[1] || ""}
          onChange={(e) => handleChange(1, e.target.value)}
          className="w-full py-2 px-2 border-2 border-secondary rounded-lg text-gray-600 text-sm focus:outline-none focus:border-black appearance-none"
        />
      </div>

      {/* Selector de divisa */}
      <div className="flex items-center gap-6 mt-4 justify-center">
        {["ARS", "USD"].map((currency) => (
          <label
            key={currency}
            className={`flex items-center gap-2 cursor-pointer text-sm text-gray-700 select-none ${
              priceFIAT === currency ? "font-bold text-black" : ""
            }`}
          >
            <input
              type="radio"
              name="currency"
              value={currency}
              checked={priceFIAT === currency}
              onChange={() => setPriceFIAT(currency)}
              className="hidden"
            />
            <span
              className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-colors ${
                priceFIAT === currency
                  ? "border-black bg-black"
                  : "border-gray-400 bg-white"
              }`}
            >
              {priceFIAT === currency && (
                <span className="w-2 h-2 bg-white rounded-full"></span>
              )}
            </span>
            {currency}
          </label>
        ))}
      </div>
    </div>
  );
};

export default PriceRangeFilter;
