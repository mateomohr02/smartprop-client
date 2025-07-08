import Link from "next/link"

const NavigationFooter = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 py-4">
      <Link href="/">Inicio</Link>
      <Link href="/propiedades">Propiedades</Link>
      <Link href="/publicar">Publicamos tu Propiedad</Link>
      <Link href="/contacto">Contacto</Link>
      <Link href="/servicios">Conocé Nuestros Servicios</Link>
      <Link href="/sobre-nosotros">Sobre Nosotros</Link>
      <Link href="/blog">Nuestro Blog</Link>
      <Link href="/administrador">Administrador</Link>

    </div>
  )
}

export default NavigationFooter