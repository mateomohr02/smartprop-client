const ExpensesRangeFilter = ({ expensesRange, setExpensesRange, expensesFIAT, setExpensesFIAT}) => {
  const handleChange = (index, value) => {
    const newRange = [...expensesRange];
    newRange[index] = value ? Number(value) : null;
    setExpensesRange(newRange);
  };

  return (
    <div className="flex flex-col w-full">
      <p className="my-1">Expensas:</p>
      <div className="flex items-center gap-2">
        <input
          type="number"
          placeholder="Min."
          value={expensesRange[0] || ""}
          onChange={(e) => handleChange(0, e.target.value)}
          className="w-full py-2 px-2 border-2 border-secondary rounded-lg text-gray-600 text-sm focus:outline-none focus:border-black appearance-none"
        />
        <span className="text-gray-500"><strong>-</strong></span>
        <input
          type="number"
          placeholder="Max."
          value={expensesRange[1] || ""}
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
              expensesFIAT === currency ? "font-bold text-black" : ""
            }`}
          >
            <input
              type="radio"
              name="currency"
              value={currency}
              checked={expensesFIAT === currency}
              onChange={() => setExpensesFIAT(currency)}
              className="hidden"
            />
            <span
              className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-colors ${
                expensesFIAT === currency
                  ? "border-black bg-black"
                  : "border-gray-400 bg-white"
              }`}
            >
              {expensesFIAT === currency && (
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

export default ExpensesRangeFilter;
