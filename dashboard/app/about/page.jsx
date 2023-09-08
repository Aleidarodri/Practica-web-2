import { Noto_Serif, Outfit } from "next/font/google";
import { Pacifico } from "next/font/google";

const outfit = Outfit({ subsets: ["latin"], weight: "300" });
const pacifico = Pacifico({ subsets: ["latin"], weight: ["400"] });

export default (About) => {
  return (
    <div className="bg-secondary h-screen w-screen">
      <div className="h-screen  max-w-md ml-[250px] bg-fondo rounded-2xl shadow-2xl">
        <h1
          className={` text-center  bg-primary 
           text-2xl ${pacifico.className}`}
        >
          Acerca de Mi
        </h1>
        <h2 className={`text-center text-xl ${outfit.className} mt-16`}>
          Aleida Rodriguez Gonzalez
        </h2>
        <h3 className={`text-center text-lg ${outfit.className}`}>
          Estudiante de Ingenieria En Sistemas Computacionales
        </h3>

        <h3
          className={`text-center text-xl ${outfit.className} pt-3 text-secundario`}
        >
          Contacto:
          <li>al19760549@ite.edu.mx</li>
          <li>Ensenada, B.C.</li>
          <li>Ig: @Aleida.rg</li>
        </h3>
        <h4 className="mt-5 text-center">Conocimiento en :</h4>
        <ul className="ml-2 text-center">
          <li>SQL</li>
          <li>Flutter*</li>
          <li>React*</li>
        </ul>
      </div>
    </div>
  );
};
