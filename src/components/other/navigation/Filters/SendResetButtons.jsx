const SendResetButtons = ({filters, setShowFilters, resetFilters}) => {

  console.log(filters, 'filters to send');
  


  return (
    <div className="w-full flex justify-end items-center my-2 gap-4">
        <button className="w-full rounded-lg p-2 max-w-40 hover:text-blue-500" onClick={() => resetFilters()}>Limpiar Filtros</button>
        <button className={`${filters.propertyType && filters.operation? '': 'pointer-events-none opacity-50'} w-full border-2 rounded-lg p-2 border-secondary max-w-64  bg-secondary/25 `}>Buscar</button>
    </div>
  )
}

export default SendResetButtons