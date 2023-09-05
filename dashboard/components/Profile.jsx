import { Pacifico } from "next/font/google";

const pacifico = Pacifico({ subsets: ["latin"], weight: ["400"] });
export default (Profile) => {
  //pagina Home

  //pagina informacion
  return (
    <div className="w-screen h-screen bg-[#EFD9D1]">
      <div className=" bg-[#d19793]  p-6 ">
        <div className="">
          <h1 className={`text-center text-4xl ${pacifico.className}`}>
            Acerca de mi
          </h1>
        </div>
      </div>
      <div className=" justify-cen text-center p-3">
        <div className="">
          <h1>Aleida Rodriguez</h1>
          <h1></h1>
          <h2>Ing. Sistemas Computacionales</h2>
          <h3 className="mt-5">Conocimiento en :</h3>
          <ul className="ml-2">
            <li>SQL</li>
            <li>Flutter*</li>
            <li>React*</li>
          </ul>
          <div className="mt-10 ">
            <h3>Contacto</h3>
            <div className=" justify-around ">
              <p>al197605491@ite.edu.mx</p>
              <p>Ensenada, B.C.</p>
              <p>Ig: @Aleida.rg</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
