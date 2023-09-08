import React from "react";

function Table(props) {
  const {
    bodyFat,
    bodyFatKg,
    boneMassPercentage,
    boneMass,
    residualMassPercentage,
    residualMass,
    muscleMass,
    muscleMassKg,
  } = props;
  
  return (
    <table className="text-sm text-left text-tertiary bg-[white]">
      <thead className="text-xs text-gray-700 uppercase bg-[#ff99ac] md-5">
        <tr className="border-a ">
          <th scope="col" className="px-6">
            Datos
          </th>
          <th scope="col" className="px-6">
            %
          </th>
          <th scope="col" className="px-6">
            Kg
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className=" border-a">
          <th scope="row" className="px-6 font-medium">
            Masa Grasa
          </th>
          <td className="px-6">{bodyFat}</td>
          <td className="px-6">{bodyFatKg}</td>
        </tr>
        <tr className=" border-a">
          <th scope="row" className="px-6 font-medium">
            Masa Ósea
          </th>
          <td className="px-6">{boneMassPercentage}</td>
          <td className="px-6">{boneMass}</td>
        </tr>
        <tr className=" border-a">
          <th scope="row" className="px-6 font-medium">
            Masa Residual
          </th>
          <td className="px-6">{residualMassPercentage}</td>
          <td className="px-6">{residualMass}</td>
        </tr>
        <tr className="border-a">
          <th scope="row" className="px-6 font-medium">
            Masa Muscular
          </th>
          <td className="px-6">{muscleMass}</td>
          <td className="px-6">{muscleMassKg}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Table;
