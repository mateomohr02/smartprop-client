import Link from "next/link"

const NavBar = () => {
  return (
    <ul>
        <li><Link href="/">Inicio</Link></li>
        <li><Link href="/propiedades">Propiedades</Link></li>
    </ul>
  )
}

export default NavBar