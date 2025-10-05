"use client";

const ComoditiesFilter = ({ options, comodities, setComodities }) => {
  const handleToggle = (slug) => {
    if (comodities.includes(slug)) {
      setComodities(comodities.filter((r) => r !== slug));
    } else {
      setComodities([...comodities, slug]);
    }
  };

  return (
    <div className="flex flex-col w-full">
      <p className="my-1">Comodities:</p>

      <div className="grid my-1 grid-cols-2 gap-x-8 gap-y-2">
        {options.map((comodity) => {
          const isSelected = comodities.includes(comodity.slug);

          return (
            <label
              key={comodity.id}
              className="flex items-center cursor-pointer text-gray-700 text-sm select-none"
              onClick={() => handleToggle(comodity.slug)}
            >
              <span
                className={`w-4 h-4 mr-2 rounded-full border-2 flex items-center justify-center transition-colors ${
                  isSelected
                    ? "border-black bg-black"
                    : "border-gray-400 bg-white"
                }`}
              >
                {isSelected && (
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                )}
              </span>
              <span
                className={`${isSelected ? "font-semibold text-black" : ""}`}
              >
                {comodity.name.trim()}
              </span>
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default ComoditiesFilter;
