"use client";

const Operation = ({ operation, setOperation}) => {

  return (
    <div className="w-full flex gap-2 justify-evenly font-medium ">
      <button onClick={() => setOperation("sale")} className={`border-secondary ${operation === 'sale' ? 'bg-secondary text-contrast' : ""} rounded-lg py-2 px-4 border-2 w-full`}>Compra</button>
      <button onClick={() => setOperation("rent")} className={`border-secondary ${operation === 'rent' ? 'bg-secondary text-contrast' : ""} rounded-lg py-2 px-4 border-2 w-full`}>Alquiler</button>
    </div>
  );
};

export default Operation;
