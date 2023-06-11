import {
  Box,
} from "@mui/material";
import React from "react";
import Slide from "../../App/Home/Slide";
import "./HomePage.css";
import { SlideOneGrid } from "./SlideOneGrid";

function HomePage() {
  const mainBox = React.useRef<HTMLDivElement>();


  // set title of page
  document.title = "Arian Rezaei";


  return (
    <Box
      className='main-container'
      ref={mainBox}
      width={1}
      height={"100dvh"}
      display='block'
      justifyContent='center'
      alignItems='center'
      whiteSpace={"pre-line"}
      sx={{
        scrollSnapType: "y mandatory",
        overflowY: "auto",
        scrollBehavior: "smooth",
      }}
    >
      <Slide>
        {SlideOneGrid}
        <Box width={'100%'} height={"100dvh"} zIndex={0}>
        </Box>
      </Slide>
      <Slide className='slider-two' zIndex={2}>
      </Slide>
      <Slide className='slider-three'></Slide>
      <Slide className='slider-four' />
    </Box>
  );
}

export default HomePage;
