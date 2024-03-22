import { useEffect, useState } from "react";
import "./App.css";
import RotateDiv from "./Components/RotateDiv";
import RotateTranslateDiv from "./Components/RotateTranslateDiv";
import ViewBasedAnimation from "./Components/ViewBasedAnimation";
import ScrollBarProgressAnimation from "./Components/ScrollBarProgressAnimation";
import ShapeNTextAnimation from "./Components/ShapeNTextAnimation";
import MouseHoverTiltCard from "./Components/MouseHoverTiltCard";
import MouseHoverTiltCardWithContent from "./Components/MouseHoverTiltCardWithContent";
import HideNavOnPageScroll from "./Components/HideNavOnPageScroll&Sidebar";
import GridComponent from "./Components/Mansory grid component/GridComponent";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ParallaxAnimation from "./Components/ParallaxAnimation";
import ScrollTopButton from "./Components/ScrollTopButton";
import Matrix from "./Components/Matrix";
import HalfScroll from "./Components/HalfScroll";
import Reveal from "./Components/Reveal";
import OpacityCard1 from "./Components/OpacityCard1";
import OpacityCard2Group from "./Components/OpacityCard2Group";

function App() {

  document.body.style.overflowX = "hidden";
  const [bodyWidth, setBodyWidth] = useState(
    document.documentElement.clientWidth
  );
  document.body.style.width =
    document.documentElement.clientWidth.toString() + "px";

  function notify() {
    setBodyWidth(document.documentElement.clientWidth);
    document.body.style.width =
      document.documentElement.clientWidth.toString() + "px";
  }
  window.addEventListener("resize", notify);

const dataList=[
  {
    title:'Hello',
    desc:'lorem ipsum dolor sit amet, con bsfiubsf; con ',
img:'https://pixlr.com/images/index/ai-image-generator-two.webp'
  },{
    title:'Hello',
    desc:'lorem ipsum dolor sit amet, con bsfiubsf; con ',
img:'https://plus.unsplash.com/premium_photo-1683910767532-3a25b821f7ae?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D'
  },{
    title:'Hello',
    desc:'lorem ipsum dolor sit amet, con bsfiubsf; con ',
img:'https://burst.shopifycdn.com/photos/cave-of-wonder-and-lights.jpg?width=1000&format=pjpg&exif=0&iptc=0'
  },
]
  return (
    <BrowserRouter>
      <>
        <HideNavOnPageScroll />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <ScrollBarProgressAnimation />

                <div className="w-1/2 mx-auto flex-col gap-y-[100px] items-center flex mt-5 ">
                  <RotateDiv />
                  <RotateTranslateDiv />
                  <ShapeNTextAnimation />
                  <div className="flex flex-row flex-wrap gap-x-12">
                    <MouseHoverTiltCard />
                    <MouseHoverTiltCardWithContent />
                  </div>
                  <ViewBasedAnimation />
                </div>
                <GridComponent width={bodyWidth} />
                <div className="my-10 flex gap-x-5 mx-auto justify-evenly items-center w-3/4 gap-y-4">
                  <OpacityCard1 bgImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnhoHDIbSi0WJkzGYr6wemnCS2OzSRkhokmA&usqp=CAU" />
                  <OpacityCard1 bgImg="https://d3nn873nee648n.cloudfront.net/HomeImages/Concept-and-Ideas.jpg?w=248&fit=crop&auto=format" />
                  <OpacityCard1 bgImg="https://pixlr.com/images/index/ai-image-generator-three.webp" />
                </div>
                <OpacityCard2Group list={dataList}/>
              </>
            }
          ></Route>

          <Route
            path="/space"
            element={
              <>
                <ParallaxAnimation />
                <ScrollTopButton />
              </>
            }
          ></Route>

          <Route
            path="/matrix"
            element={
              <>
                <Matrix />
              </>
            }
          ></Route>

          <Route
            path="/half"
            element={
              <>
                <HalfScroll />
                <Reveal />
              </>
            }
          ></Route>
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
