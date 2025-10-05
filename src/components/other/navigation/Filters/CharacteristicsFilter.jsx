"use client";

const CharacteristicsFilter = ({ options, characteristics, setCharacteristics }) => {

  const handleToggle = (slug) => {
    if (characteristics.includes(slug)) {
      setCharacteristics(characteristics.filter((r) => r !== slug));
    } else {
      setCharacteristics([...characteristics, slug]);
    }
  };

  return (
    <div className="flex flex-col w-full">
      <p className="my-1">Características:</p>

      <div className="grid my-1 grid-cols-2 gap-x-8 gap-y-2">
        {options.map((characteristic) => {
          const isSelected = characteristics.includes(characteristic.slug);

          return (
            <label
              key={characteristic.id}
              className="flex items-center cursor-pointer text-gray-700 text-sm select-none"
              onClick={() => handleToggle(characteristic.slug)}
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
                {characteristic.name.trim()}
              </span>
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default CharacteristicsFilter;
