// esto es para que se desarrolle del lado del cliente
// "use client"; si no espesificamos esto todo se desarrolla del lado del servidor por defecto.
import Link from "next/link";
import { ActividadLink} from "../link-actividad/ActividadLink";
const navItems = [
  { path: "/about", text: "About" },
  { path: "/contacto", text: "Contacto" },
  { path: "/precio", text: "Precio" },
];
export const Navbar = async () => {
  return (
    <nav className="flex bg-yellow-500 bg-opacity-300 p-2 m-2 rounded">
      <Link href={"/"} className="mr-2">
        {/* logo de home */}
        <span>Hogar del Navbar</span>
      </Link>
      <div className="flex flex-1 "></div>
      {navItems.map((navItems) => (
       <ActividadLink key ={navItems.path} {...navItems}/>
      //   otra variable <ActividadLink key ={navItems.path} path={navItems.path} text={navItems.text}/>
      ))}
      {/* <Link className="mr-2" href="/contacto">
        Contacto
      </Link>
      <Link className="mr-2" href="/precio">
        Precio
      </Link> */}
    </nav>
  );
};
