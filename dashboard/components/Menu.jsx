import Link from "next/link";
import { Pacifico } from "next/font/google";

const pacifico = Pacifico({ subsets: ["latin"], weight: ["400"] });

const menuRoutes = [
  { ruta: "/", nombre: "°Inicio" },
  { ruta: "/about", nombre: " °Acerca de" },
  { ruta: "/composicion", nombre: "  °Composición corporal" },
];
//menu de opciones
function Menu() {
  return (
    <div className=" bg-terciary  h-screen  ">
      <h1
        className={`text-center text-xl  m-10 text-#d19793 ${pacifico.className}`}
      >
        Menú
      </h1>
      <ol>
        {menuRoutes.map((menu, index) => (
          <li key={index}>
            <Link href={menu.ruta}>{menu.nombre}</Link>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Menu;
