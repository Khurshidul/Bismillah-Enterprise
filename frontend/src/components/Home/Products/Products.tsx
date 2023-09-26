import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Products.css";

type workType = {
  _id: String;
  image: String;
  work_title: String;
  team: String;
  description: String;
};

interface PropTypes {}

const Products: React.FC<PropTypes> = () => {
  const [works, setWorks] = useState<workType[]>([]);
  useEffect(() => {
    const fetchWorks = async () => {
      const reponse = await fetch("http://localhost:1000/works");
      const data = await reponse.json();
      console.log(data);
      setWorks(data);
    };
    fetchWorks();
  }, []);

  return (
    <div className="projects">
      <h2 id="pjct_title">
        Completed <span style={{ color: "salmon" }}>Works</span>
      </h2>
      <div className="all-projects">
        {works.map((work) => (
          <Product work={work}></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
