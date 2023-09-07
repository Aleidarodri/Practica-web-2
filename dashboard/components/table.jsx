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
    <table className="text-sm text-left text-tertiary bg-fondo">
      <thead className="text-xs text-gray-700 uppercase bg-terciary">
        <tr className="border-a ">
          <th scope="col" className="px-6">
            Component
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
            Body Fat
          </th>
          <td className="px-6">{bodyFat}</td>
          <td className="px-6">{bodyFatKg}</td>
        </tr>
        <tr className=" border-a">
          <th scope="row" className="px-6 font-medium">
            Bone Mass
          </th>
          <td className="px-6">{boneMassPercentage}</td>
          <td className="px-6">{boneMass}</td>
        </tr>
        <tr className=" border-a">
          <th scope="row" className="px-6 font-medium">
            Residual Mass
          </th>
          <td className="px-6">{residualMassPercentage}</td>
          <td className="px-6">{residualMass}</td>
        </tr>
        <tr className="border-a">
          <th scope="row" className="px-6 font-medium">
            Muscle Mass
          </th>
          <td className="px-6">{muscleMass}</td>
          <td className="px-6">{muscleMassKg}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Table;
