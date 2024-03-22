import { useState } from "react";
import React from "react";
import List from "./List";
import Modal from "./Modal";

function GridComponent({ width }) {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <h1 className="text-4xl  mx-auto my-10 text-center font-semibold">
        Grid Component
      </h1>
      <div className={`mx-auto w-[${width}px] px-10 mb-5`}>
        <List setSelected={setSelected} />
        <Modal selected={selected} setSelected={setSelected} />
      </div>
    </>
  );
}

export default GridComponent;
