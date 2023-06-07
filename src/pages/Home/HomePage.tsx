import { Box, Typography } from "@mui/material";
import React from "react";
import Slide from "../../App/Home/Slide";
import "./HomePage.css";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { primary } from "../../theme/Colors";

function HomePage() {
  const mainBox = React.useRef<HTMLDivElement>();

  // if (mainBox.current)
  //   mainBox.current.addEventListener(
  //     "scroll",
  //     () => {
  //       // console.log(mainBox.current.scrollTop);
  //     },
  //     { passive: true }
  //   );

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

      <Slide className='slider-one'>
        <Grid2
          container
          width={"90%"}
          height={"100dvh"}
          columnSpacing={5}

        >
          <Grid2
            xs={12}
            sm={6}
            md={4}
            lg={3}
            xl={3}
          >
            <Box
              width={1}
              height={1}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <img
                src='../src/assets/images/Main3x4.jpg'
                alt=''
                width={"100%"}
                className='profile-image'
              />
            </Box>
          </Grid2>

          <Grid2
            xs={12}
            sm={6}
            md={4}
            lg={3}
            xl={5}
            padding={"1rem"}
          >
            <Box
              width={1}
              height={1}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Box width={"100%"}>
                <Typography
                  variant={"h1"}
                  color={primary}
                  sx={{
                    direction: "ltr",
                    userSelect: "none",
                  }}
                >
                  Arian Rezaei
                </Typography>
                <Typography
                  variant={"h4"}
                  color={primary}
                  paddingBottom={"0.5rem"}
                  sx={{
                    direction: "ltr",
                    userSelect: "none",
                    borderBottom: "1px solid #fff",
                  }}
                >
                  Front-end Developer
                </Typography>
              </Box>
            </Box>
          </Grid2>
        </Grid2>
      </Slide>
      <Slide className='slider-two' />
      <Slide className='slider-three' />
      <Slide className='slider-four' />
    </Box>
  );
}

export default HomePage;
