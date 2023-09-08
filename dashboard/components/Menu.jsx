import Link from "next/link";
import { Pacifico } from "next/font/google";

const pacifico = Pacifico({ subsets: ["latin"], weight: ["400"] });

//make the routes
const menuRoutes = [
  {
    ruta: "/",
    nombre: " Inicio",
  },
  {
    ruta: "/about",
    nombre: "Acerca de mi",
  },

  {
    ruta: "/corporal",
    nombre: "Composición Corporal",
  },
];

//use the routes
function Menu() {
  return (
    <div
      className="w-[20%] bg-primary   border-#ff7096  "
      name="viewport"
      content="width=device-width, initial-scale=1.0"
    >
      <h1
        className={`pb-2 p-10   text-center text-4xl text-2xl  ${pacifico.className}`}
      >
        Menú
      </h1>
      <ol>
        {menuRoutes.map((menu, index) => (
          <li
            className={`pt-2 pb-2   text-center   hover:bg-fondo `}
            key={index}
          >
            <Link href={menu.ruta}>{menu.nombre}</Link>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Menu;
