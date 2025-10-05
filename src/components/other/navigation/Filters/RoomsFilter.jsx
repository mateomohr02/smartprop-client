const RoomsFilter = ({ rooms, setRooms }) => {
  const handleChange = (index, value) => {
    const newRange = [...rooms];
    newRange[index] = value ? Number(value) : null;
    setRooms(newRange);
  };

  return (
    <div className="flex flex-col w-full">
      <p className="my-1">Ambientes:</p>
      <div className="flex items-center gap-2">
        <input
          type="number"
          placeholder="Min."
          min={0}
          value={rooms[0] || ""}
          onChange={(e) => handleChange(0, e.target.value)}
          className="w-full py-2 px-2 border-2 border-secondary rounded-lg text-gray-600 text-sm focus:outline-none focus:border-black appearance-none"
        />
        <span className="text-gray-500 font-semibold"><strong>-</strong></span>
        <input
          type="number"
          placeholder="Max."
          min={0}
          value={rooms[1] || ""}
          onChange={(e) => handleChange(1, e.target.value)}
          className="w-full py-2 px-2 border-2 border-secondary rounded-lg text-gray-600 text-sm focus:outline-none focus:border-black appearance-none"
        />
      </div>
    </div>
  );
};

export default RoomsFilter;
