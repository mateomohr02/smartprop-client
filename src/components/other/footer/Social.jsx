import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { FiMail } from "react-icons/fi";

import Link from "next/link"

const Social = () => {
  return (
    <div className="flex flex-col py-4 gap-4 items-baseline">
        <Link href="https://www.instagram.com/smartbusiness.arg/?hl=es-la" target="blank" className="flex items-center gap-1" > < FaInstagram size={20}/> @smartbusiness</Link>
        <Link href="https://maps.app.goo.gl/tLU15VTp18n2Yasy5" target="blank" className="flex items-center gap-1" > <IoLocationOutline size={22}/> Av. Libertad 2179 - Humboldt, Santa Fé</Link>
        <Link href="https://wa.me/543751613750/?text=Hola%21%20Quer%C3%ADa%20consultar%20por%20el%20servicio%20de%20SmartProp..." target="blank" className="flex items-center gap-1" > <FaWhatsapp size={20}/> +54 3751613750 </Link>
        <Link href="mailto:smart.business.arg@gmail.com" className="flex items-center gap-1" >  <FiMail size={20}/> smart.business.arg@gmail.com</Link>
    </div>
  )
}

export default Social