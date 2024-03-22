import React from "react";
import { motion } from "framer-motion";


function Modal({ selected, setSelected }) {
  if (!selected) {
    return <></>;
  } else {
    document.body.style.overflowY = "hidden";

  }
  return (
    <div className="w-[500px]">
      <div
        onClick={() => {
          setSelected(null);
          document.body.style.overflowY = "auto";
        }}
        className="fixed inset-0  bg-black/50 z-[60] cursor-pointer overflow-y-scroll"
      >
        {/* inset-0 just covers whole screen */}
        <div
          onClick={(e) => e.stopPropagation()} // .stopPropagation() method prevents parent event from bubbling/affecting/calling from children
          className="w-full max-w-[500px] mx-auto my-12 px-8 cursor-default"
        >
          <motion.div>
            <motion.img
            layout
              layoutId={selected.id}
              id="a"
              className="w-full"
              src={selected.url}
              alt="img"
            />
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              y: 50,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.5,
            }}
            className={` bg-white p-2 `}
          >
            <h3 className="mb-2 font-bold text-2xl">{selected.title}</h3>
            <div className="inline-flex flex-wrap mt-5 justify-center gap-3">
              {selected.tags.map((tag) => {
                return (
                  <span key={tag} className="py-1 px-2 bg-slate-300 rounded-md">
                    {tag}
                  </span>
                );
              })}
            </div>
            <p className="my-4">{selected.description}</p>
            <button
              type="btn"
              className="px-2 py-2 text-center bg-black text-white w-full"
            >
              Download
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}


export default Modal;
