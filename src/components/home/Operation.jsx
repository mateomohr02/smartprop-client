"use client";

const Operation = ({ operation, setOperation}) => {

  return (
    <div className="w-full flex gap-2 justify-evenly font-medium ">
      <button onClick={() => setOperation("comprar")} className={`border-secondary ${operation === 'comprar' ? 'bg-secondary text-contrast' : ""} rounded-lg py-2 px-4 border-2 w-full`}>Comprar</button>
      <button onClick={() => setOperation("alquilar")} className={`border-secondary ${operation === 'alquilar' ? 'bg-secondary text-contrast' : ""} rounded-lg py-2 px-4 border-2 w-full`}>Alquilar</button>
    </div>
  );
};

export default Operation;
