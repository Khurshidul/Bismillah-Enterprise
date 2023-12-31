import React, { useState } from "react";
import { useQuery } from "react-query";
import fetchData from "../FetchData/fetchData";
import Material from "../Home/Material/Material";
import { Imaterials } from "../Materials/Materials";

interface PropTypes {}

const AllMaterials: React.FC<PropTypes> = () => {
  const { data } = useQuery("materials", () =>
    fetchData("https://bismillah-enterprise-zeta.vercel.app/materials"),
  );

  return (
    <div className="mat-container">
      <h1>Important Materials</h1>
      <div className="materials">
        {data.map((material: Imaterials) => (
          <Material key={material._id} material={material} />
        ))}
      </div>
    </div>
  );
};

export default AllMaterials;
