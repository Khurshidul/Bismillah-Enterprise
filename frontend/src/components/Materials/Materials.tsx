import React, { useEffect, useState } from "react";
import "./Materials.css";
import fetchData from "../FetchData/fetchData";
import { useQuery } from "react-query";
import Material from "../Home/Material/Material";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
interface PropTypes {}
export type Imaterials = {
  _id: string;
  materialName: string;
  img: string;
  price: number;
  discount: number;
};

const Materials: React.FC<PropTypes> = () => {
  const { data } = useQuery("materials", () =>
    fetchData("https://bismillah-enterprise-zeta.vercel.app/materials"),
  );
  const [noOfMaterial, setNoOfMaterial] = useState<any>(8);
  // const [isLoadMore, setIsLoadMore] = useState<any>(false);
  const sliceData = data.slice(0, noOfMaterial);
  const loadMore = () => {
    setNoOfMaterial(noOfMaterial);
  };
  return (
    <div className="mat-container">
      <h1>Important Materials</h1>
      <div className="materials">
        {sliceData.map((material: Imaterials) => (
          <Material key={material._id} material={material} />
        ))}
      </div>
      <Link to={"/materials"}>
        <Button
          className="load-more"
          onClick={() => {
            loadMore();
            // setIsLoadMore(!isLoadMore);
          }}
          variant="outline-danger">
          View all
        </Button>
      </Link>
      {/* {isLoadMore && <AllMaterials />} */}
    </div>
  );
};

export default Materials;
