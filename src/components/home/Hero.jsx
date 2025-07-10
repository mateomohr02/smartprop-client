import Image from "next/image";
import familia from "../../../public/familia.jpeg";
import { FaHeart } from "react-icons/fa";


const Hero = () => {
  return (
    <div className="w-full max-h-[600px]">
      <div className="relative min-h-[500px] w-full bg-third">
        {/* Imagen de fondo */}
        <Image
          src={familia}
          alt="Imágen de Fondo"
          className="object-cover z-10 backdrop opacity-90"
          fill
          priority
          placeholder="blur"
        />

        {/* Contenedor del texto */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full flex items-center justify-center z-20 px-4">
          <h1 className="text-contrast text-2xl font-semibold text-left leading-tight -translate-y-3/4 whitespace-nowrap">
            <span className="flex items-center gap-2">
              Encontrá tu hogar <FaHeart />
            </span>
            <span className="block">en nuestra Inmobiliaria</span>
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Hero