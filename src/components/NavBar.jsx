import { NavLink } from "react-router-dom"

const NavBar = () => {
  return (
    <nav>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='galeria'>Galería de Imágenes</NavLink>
      <NavLink to='diario'>Diario</NavLink>
    </nav>
  )
}

export default NavBar
