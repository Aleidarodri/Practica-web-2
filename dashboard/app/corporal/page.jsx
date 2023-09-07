"use client";
import { Noto_Serif, Outfit } from "next/font/google";
import { Pacifico } from "next/font/google";

import React, { useState } from "react";
import { ChartComp } from "../../components/ChartComp.jsx";
import Inputs from "../../components/inputs.jsx";
import Table from "../../components/table.jsx";

const Noto = Noto_Serif({ subsets: ["latin"], weight: "400" });
const outfit = Outfit({ subsets: ["latin"], weight: "300" });
const pacifico = Pacifico({ subsets: ["latin"], weight: ["400"] });

export default (About) => {
  const [formData, setFormData] = useState({
    Gender: "",
    weight: "",
    height: "",
    age: "",
    bicipital: "",
    tricipital: "",
    subscapular: "",
    suprailiac: "",
    bicepsSkinfold: "",
    femur: "",
    density: "",
    bodyFat: "",
    boneMass: "",
    residualMass: "",
    bodyFatKg: "",
    boneMassPercentage: "",
    residualMassPercentage: "",
    muscleMass: "",
    muscleMassKg: "",
  });

  const hadleSubmit = (e) => {
    e.preventDefault();
    calculatedensity(formData);
  };

  const handleData = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  //this is for calculate all data
  const calculatedensity = () => {
    const {
      bicipital: bicipital,
      tricipital,
      subscapular,
      suprailiac,
      Gender,
      weight,
      height,
      femur,
      bicepsSkinfold,
    } = formData;

    const sumapliegues =
      parseFloat(bicipital) +
      parseFloat(tricipital) +
      parseFloat(subscapular) +
      parseFloat(suprailiac);
    const densitytemp =
      Gender === "man"
        ? 1.1765 - 0.0744 * Math.log10(sumapliegues)
        : 1.1567 - 0.0717 * Math.log10(sumapliegues);
    const bodyFat = (495 / parseFloat(densitytemp) - 450).toFixed(2);
    const bodyFatKg = ((bodyFat * weight) / 100).toFixed(2);
    const boneMass = (
      Math.pow(
        Math.pow(height / 100, 2) *
          (femur / 100) *
          (bicepsSkinfold / 100) *
          400,
        0.712
      ) * 3.02
    ).toFixed(2);
    const residualMass =
      Gender === "man"
        ? (0.24 * weight).toFixed(2)
        : (0.21 * weight).toFixed(2);
    const boneMassPercentage = ((boneMass * 100) / weight).toFixed(2);
    const residualMassPercentage = ((residualMass * 100) / weight).toFixed(1);
    const muscleMass = (
      100 -
      parseFloat(bodyFat) -
      parseFloat(boneMassPercentage) -
      parseFloat(residualMassPercentage)
    ).toFixed(2);
    const muscleMassKg = ((muscleMass * weight) / 100).toFixed(2);

    setFormData({
      ...formData,
      density: densitytemp.toFixed(3),
      bodyFat,
      bodyFatKg,
      boneMass,
      residualMass,
      boneMassPercentage,
      residualMassPercentage,
      muscleMass,
      muscleMassKg,
    });
  }; //end of what we use to calculate all the data
  return (
    <div className="bg-secondary w-full">
      <h1
        className={` bg-terciary p-3 text-center text-3xl ${pacifico.className} text-tertiary`}
      >
        Body composition
      </h1>

      <form onSubmit={hadleSubmit} action="">
        {/*this div is for the inputs for the text that goes along with them*/}
        <div className="flex items-center  bg-[#e5cdc8] justify-center mx-auto gap-16 border-2 pb-4 mt-5 rounded-2xl max-w-prose border-tertiary">
          <div className="text-center ">
            <h3
              className={`mt-3 text-center text-lg ${outfit.className} text-tertiary`}
            >
              Gender
            </h3>
            <select
              className="rounded-xl pl-2 pr-2 w-full pt-1 pb-1"
              name="Gender"
              title="Gender"
              value={formData.Gender}
              onChange={(e) => handleData(e.target.name, e.target.value)}
            >
              <option>Choose your Gender</option>
              <option value="man">Man</option>
              <option value="woman">Woman</option>
            </select>
            <h3
              className={`mt-3 text-center text-lg ${outfit.className} text-tertiary`}
            >
              Weight
            </h3>
            <Inputs
              value={formData.weight}
              onChange={handleData}
              name="weight"
            />
            <h3
              className={`mt-3 text-center text-lg ${outfit.className} text-tertiary`}
            >
              Height
            </h3>
            <Inputs
              value={formData.height}
              onChange={handleData}
              name="height"
            />
            <h3
              className={`mt-3 text-center text-lg ${outfit.className} text-tertiary`}
            >
              Age
            </h3>
            <Inputs value={formData.age} onChange={handleData} name="age" />
            <h3
              className={`mt-3 text-center text-lg ${outfit.className} text-tertiary`}
            >
              Biceps Skinfold
            </h3>
            <Inputs
              value={formData.bicepsSkinfold}
              onChange={handleData}
              name="bicepsSkinfold"
            />
          </div>

          <div className="text-center">
            <h3
              className={`mt-3 text-center text-lg ${outfit.className} text-tertiary`}
            >
              Bicipital
            </h3>
            <Inputs
              value={formData.bicipital}
              onChange={handleData}
              name="bicipital"
            />
            <h3
              className={`mt-3 text-center text-lg ${outfit.className} text-tertiary`}
            >
              Tricipital
            </h3>
            <Inputs
              value={formData.tricipital}
              onChange={handleData}
              name="tricipital"
            />
            <h3
              className={`mt-3 text-center text-lg ${outfit.className} text-tertiary`}
            >
              Subscapular
            </h3>
            <Inputs
              value={formData.subscapular}
              onChange={handleData}
              name="subscapular"
            />
            <h3
              className={`mt-3 text-center text-lg ${outfit.className} text-tertiary`}
            >
              Suprailiac
            </h3>
            <Inputs
              value={formData.suprailiac}
              onChange={handleData}
              name="suprailiac"
            />
            <h3
              className={`mt-3 text-center text-lg ${outfit.className} text-tertiary `}
            >
              Femur
            </h3>
            <Inputs value={formData.femur} onChange={handleData} name="femur" />
          </div>
        </div>{" "}
        {/*finish of the div that is for the inputs for the text that goes along with them*/}
        <div className="flex justify-center">
          {" "}
          {/*button*/}
          <input
            className="mt-4 border-2 rounded-2xl text-tertiary border-terciary p-4 font-bold bg-terciary hover:bg-primary"
            type="submit"
            value={"calculate"}
            onClick={calculatedensity}
          />
        </div>{" "}
        {/*button*/}
        <div className="flex flex-row justify-center gap-16">
          {/*this div is for joining the table and the result table */}
          <div className="p-2 bg-tertiary w-72 mt-5 rounded-xl  h-auto">
            {console.log("Valores de porcentajes:", formData.density)}
            <p>Body density: {formData.density}</p>
            <p>Body Fat: {formData.bodyFat}</p>
            <p>Bone Mass {formData.boneMass}</p>
            <p>Residual mass: {formData.residualMass}</p>
          </div>
          <div className="mt-5 border-2 rounded-xl border-terciary">
            {" "}
            {/*table */}
            <Table
              bodyFat={formData.bodyFat}
              bodyFatKg={formData.bodyFatKg}
              boneMassPercentage={formData.boneMassPercentage}
              boneMass={formData.boneMass}
              residualMassPercentage={formData.residualMassPercentage}
              residualMass={formData.residualMass}
              muscleMass={formData.muscleMass}
              muscleMassKg={formData.muscleMassKg}
            />
          </div>{" "}
          {/*End of the table */}
        </div>
        {/*this div is for joining the table and the result table*/}
        <div className="w-[300px] mx-auto mt-4 rounded-xl">
          {/*chart*/}
          <ChartComp porcentajes={formData} />
        </div>
        {/*End of the chart */}
      </form>
    </div>
  );
};
