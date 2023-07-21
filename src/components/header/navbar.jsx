import {NavLink} from "react-router-dom";
import logo from "../../../images/logo.png"
// eslint-disable-next-line react/prop-types
const NavbarItem = ({path, name}) => {
  return(
    <p className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2">
      <NavLink to={path}>{name}</NavLink>
    </p>
  );
}

export default function Navbar() {
  return (
    <>
      <nav className="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-amber-600 sm:items-baseline w-full">
        <div className="mb-2 sm:mb-0">
          <NavLink to='/'><a href=""><img src={logo} alt="logo" className="w-10 h-10"/></a></NavLink>
        </div>
        <div className="flex">
          <NavbarItem path='/atividades' name='atividades'/>
          <NavbarItem path='/frentes' name='frentes'/>
          <NavbarItem path='/sobrenos' name='sobre nós'/>
          <NavbarItem path='/contato' name='contato'/>
        </div>
      </nav>
    </>
  );
}
