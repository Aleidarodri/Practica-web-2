"use client";

import { useState } from "react";

import { Pacifico } from "next/font/google";

import { Raleway } from "next/font/google";
import Graph from "@/components/Graph";

const pacifico = Pacifico({ subsets: ["latin"], weight: ["400"] });
const raleway = Raleway({ subsets: ["latin"], weight: ["300"] });

export default (Composicion) => {
  const [genero, setGenero] = useState("Hombre");
  const [peso, setPeso] = useState(0);
  const [talla, setTalla] = useState("");
  const [edad, setEdad] = useState(0);
  const [bicipital, setBicipital] = useState(0);
  const [tricipital, setTricipital] = useState(0);
  const [supescapular, setSupescapular] = useState(0);
  const [supraileaco, setSupraileaco] = useState(0);
  const [biestiloideo, setBiestiloideo] = useState(0);
  const [femur, setFemur] = useState(0);
  const [densidad, setDensidad] = useState(0);
  const [masaGrasa, setMasaGrasa] = useState(0);
  const [PGC, setPGC] = useState(0);
  const [masaOsea, setMasaOsea] = useState(0);
  const [PMO, setPMO] = useState(0);
  const [masaResidual, setMasaResidual] = useState(0);
  const [PMR, setPMR] = useState(0);
  const [masaMuscular, setMasaMuscular] = useState(0);
  const [PMM, setPMM] = useState(0);
  const [calculado, setCalculado] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      [
        tricipital,
        bicipital,
        supescapular,
        supraileaco,
        biestiloideo,
        femur,
      ].some((v) => v <= 0) ||
      [
        tricipital,
        bicipital,
        supescapular,
        supraileaco,
        biestiloideo,
        femur,
      ].includes(NaN)
    ) {
      setError("ERROR: verifica que los datos del formulario sean correctos.");
      setCalculado(false);
      return;
    }
    const x1 = tricipital + bicipital + supescapular + supraileaco;
    const d =
      genero == "Hombre"
        ? 1.1765 - 0.0744 * Math.log10(x1)
        : 1.1567 - 0.0717 * Math.log10(x1);
    const porcentaje = 495 / d - 450;
    const osea =
      Math.pow(
        Math.pow(talla / 100, 2) * (femur / 100) * (biestiloideo / 100) * 400,
        0.712
      ) * 3.02;
    const residual = genero == "Hombre" ? peso * 0.24 : peso * 0.21;
    setDensidad(d);
    setMasaGrasa(peso * (porcentaje / 100));
    setPGC(porcentaje);
    setMasaOsea(osea);
    setPMO((osea * 100) / peso);
    setMasaResidual(residual);
    setPMR((residual * 100) / peso);
    const muscular = [
      100 - (porcentaje + (osea * 100) / peso + (residual * 100) / peso),
    ];
    setMasaMuscular(muscular);
    setPMM((peso * muscular) / 100);
    setCalculado(true);
  };

  return (
    <div className="bg-secondary w-screen h-full">
      <h1
        className={` bg-primary p-3 font-bold text-3xl text-center ${pacifico.className}`}
      >
        Composicion corporal
      </h1>
      <form onSubmit={handleSubmit}>
        <div
          className={`flex flex-col  items-center gap-5 mt-5 mb-10 justify-center ${raleway.className}`}
        >
          <div className="bg-primary p-6 items-center flex flex-col  justify-center rounded-md  ml-6">
            <div className="flex flex-col ">
              <div>
                <h1 className="font-bold">Genero </h1>
                <select
                  className="shadows border rounded p-1 w-full py-2 px-3 text-gray-700 leading-tight"
                  name="genero"
                  onChange={(e) => {
                    setGenero(e.target.value);
                  }}
                >
                  <option>Seleccionar</option>
                  <option>Hombre</option>
                  <option>Mujer</option>
                </select>
              </div>
              <div>
                <h1 className="font-bold">Peso (kg)</h1>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  onChange={(e) => {
                    setPeso(parseFloat(e.target.value));
                  }}
                />
              </div>
            </div>
            <div className="flex flex-row gap-5">
              <div>
                <h1 className="font-bold">Talla (cm)</h1>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  onChange={(e) => {
                    setTalla(parseFloat(e.target.value));
                  }}
                />
              </div>
              <div>
                <h1 className="font-bold">Edad</h1>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="number"
                  onChange={(e) => {
                    setEdad(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="flex flex-row gap-5">
              <div>
                <h1 className="font-bold">Bicipital (mm)</h1>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  onChange={(e) => {
                    setBicipital(parseFloat(e.target.value));
                  }}
                />
              </div>
              <div>
                <h1 className="font-bold">Tricipital (mm)</h1>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  onChange={(e) => {
                    setTricipital(parseFloat(e.target.value));
                  }}
                />
              </div>
            </div>
            <div>
              <h1 className="font-bold">Supescapular (mm)</h1>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                onChange={(e) => {
                  setSupescapular(parseFloat(e.target.value));
                }}
              />
            </div>
            <div>
              <h1 className="font-bold">Supraileaco (mm)</h1>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                onChange={(e) => {
                  setSupraileaco(parseFloat(e.target.value));
                }}
              />
            </div>
            <div className="flex flex-row gap-5">
              <div>
                <h1 className="font-bold">Biestiloideo (cm)</h1>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  onChange={(e) => {
                    setBiestiloideo(parseFloat(e.target.value));
                  }}
                />
              </div>
              <div>
                <h1 className="font-bold">Fémur (cm)</h1>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  onChange={(e) => {
                    setFemur(parseFloat(e.target.value));
                  }}
                />
              </div>
            </div>
            <input
              type="submit"
              value="Calcular"
              className=" mt-5 bg-secondary text-white font-bold py-2 px-8 hover:bg-terciary active:bg-primary"
            />
          </div>
          <div className="mt-2 text-lg bg-primary mr-5 w-full h-96  flex items-center justify-center rounded-md">
            {calculado && (
              <Graph
                porcentajes={[
                  PGC.toFixed(2),
                  PMO.toFixed(2),
                  PMR.toFixed(2),
                  PMM.toFixed(2),
                ]}
              />
            )}

            {calculado && (
              <div className="my-3">
                Densidad calculada: {densidad.toFixed(2)}
              </div>
            )}
            {!calculado && <div className="ml-5 my-2">{error}</div>}
          </div>
        </div>
      </form>
    </div>
  );
};
