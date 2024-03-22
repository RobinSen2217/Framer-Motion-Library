import React, { useState } from "react";
import { motion, useAnimate } from "framer-motion";
import { useEffect } from "react";

function ShapeNTextAnimation() {
  const [scope, animate] = useAnimate();
  const [key, setKey] = useState(0);
  const [vis, setVis] = useState(0);

  const [text, setText] = useState("");

  const handleAnimate = async () => {
    await animate(scope.current, { scale: 0 });
    await new Promise((resolve, reject) => {
      animate(
        scope.current,
        { scale: 1, background: "#2557fa" },
        { type: "spring", duration: 0.5 }
      );
      setKey(1);
      setTimeout(() => {
        resolve();
      }, 1000);
    });

    await new Promise(async (resolve, reject) => {
      animate(
        scope.current,
        { scale: 2, background: "#fff700", borderRadius: "25%" },
        { duration: 0.4 }
      );
      setKey(2);
      setTimeout(() => {
        resolve();
      }, 1000);
    });

    await new Promise(async (resolve, reject) => {
      animate(
        scope.current,
        { rotate: "360deg", background: "#fc03df", borderRadius: "50%" },
        { type: "spring", duration: 0.8 }
      );
      setKey(3);

      setTimeout(() => {
        resolve();
      }, 1000);
    });

    await new Promise(async (resolve, reject) => {
      animate(
        scope.current,
        { rotate: "0deg", background: "#004f1d", borderRadius: "0%" },
        { type: "spring", duration: 0.4 }
      );
      setKey(4);

      setTimeout(() => {
        resolve();
      }, 1000);
    });

    await new Promise(async (resolve, reject) => {
      animate(
        scope.current,
        { paddingLeft: "200px", width: "250px", x: 100, background: "#fa0011" },
        { type: "spring", duration: 1 }
      );
      setKey(5);

      setTimeout(() => {
        resolve();
      }, 1000);
    });

    await new Promise(async (resolve, reject) => {
      animate(
        scope.current,
        { paddingLeft: "3px", width: 50, x: -180, background: "#40c2ff" },
        { type: "spring", duration: 1 }
      );
      setKey(6);
      setTimeout(() => {
        resolve();
      }, 1000);
    });

    await new Promise(async (resolve, reject) => {
      animate(
        scope.current,
        { scale: 1, width: "150px", x: 0, background: "#ff5900" },
        { type: "spring", duration: 1 }
      );

      setKey(7);
      setTimeout(() => {
        resolve();
      }, 1000);
    });
    await new Promise(async (resolve, reject) => {
      animate(
        scope.current,
        { scale: 0 },
        { type: "spring", delay: 0.2, duration: 1 }
      );

      setTimeout(() => {
        resolve();
      }, 1000);
    });
  };

  useEffect(() => {
    handleAnimate();
    setInterval(() => {
      handleAnimate();
    }, 9000);
  }, []);

  useEffect(() => {
    if (key === 1) {
      setText("hi");
    } else if (key === 2) {
      setText("morning");
    } else if (key === 3) {
      setText("how are you");
    } else if (key === 4) {
      setText("welcome");
    } else if (key === 5) {
      setText("right");
    } else if (key === 6) {
      setText("left");
    } else if (key === 7) {
      setText("bye!");
    }
  }, [key]);

  return (
    <>
      <div
        ref={scope}
        className="w-[150px] h-[150px] bg-transparent justify-center flex p-3 mt-10 items-center text-center overflow-hidden mx-auto"
      >
        <p
          id="text"
          key={key}
          className="text-center transition-all ease-linear duration-500"
        >
          {text}
        </p>
      </div>
    </>
  );
}

export default ShapeNTextAnimation;
