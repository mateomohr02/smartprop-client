import ServiceCard from "./ServiceCard";

import { KeyRound, Search, Scale } from "lucide-react";

const Services = () => {
  return (
    <div className="bg-contrast flex flex-col items-center pb-10">
      <h2 className="text-2xl text-secondary whitespace-nowrap">
        Nuestros Servicios
      </h2>
      <div className="flex flex-col gap-6 mt-10">
        <ServiceCard title="Venta y Alquiler de Propiedades" text="Ya sea que quieras comprar tu próximo hogar o vender una propiedad, te acompañamos en cada paso para lograr una operación segura y exitosa." icon={KeyRound}/>
        <ServiceCard title="Tasación de tu inmueble" text="Obtené una valuación real basada en el mercado actual para vender o alquilar tu inmueble con el precio justo y sin demoras" icon={Search}/>
        <ServiceCard title="Consultoría legal inmobiliaria" text="Te ayudamos a tomar decisiones seguras y evitar cmoplicaciones legales al comprar, vender o alquilar una propiedad" icon={Scale}/>
      
      </div>
    </div>
  );
};

export default Services;
