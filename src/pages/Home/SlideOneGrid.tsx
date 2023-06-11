import {
  Box,
  Divider,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { primary } from "../../theme/Colors";
import ReactLogo from "../../assets/icons/React.svg";
import ReduxLogo from "../../assets/icons/Redux.svg";
import JSLogo from "../../assets/icons/JS.svg";
import TSLogo from "../../assets/icons/TS.svg";
import HTMLLogo from "../../assets/icons/HTML.svg";
import CSSLogo from "../../assets/icons/CSS.svg";
import SassLogo from "../../assets/icons/Sass.svg";
import GitLogo from "../../assets/icons/Git.svg";
import ViteLogo from "../../assets/icons/Vite.svg";

export const SlideOneGrid = (
  <Box
    justifyContent={"center"}
    alignItems={"center"}
    display={"flex"}
    width={"100%"}
    height={"100%"}
    zIndex={0}
    className='slider-one'
    position={'fixed'}
    sx={{
      userSelect: "none",
    }}
  >
    <Grid2
      container
      width={"90%"}
      height={"100dvh"}
      columnSpacing={5}
      justifyContent={"center"}
      alignItems={"center"}
      position={"relative"}

    >
      <Grid2 xs={12} sm={6} md={4} lg={3} xl={3}>
        <Box
          width={1}
          height={1}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          className='profile-image'
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
          alignItems={{
            xs: "start",
            sm: "start",
            md: "center",
            lg: "center",
            xl: "center",
          }}
        >
          <Box width={"100%"}>
            <Typography
              fontSize={"clamp(2rem, 4vw, 5rem)"}
              variant={"h1"}
              color={primary}
              sx={{
                direction: "ltr",
                userSelect: "none",
                paddingY: "0.7rem",
                zIndex: 3,
              }}
            >
              Arian Rezaei
            </Typography>
            <Typography
              variant={"h4"}
              color={primary}
              paddingBottom={"0.5rem"}
              fontSize={
                "clamp(1rem, 2vw, 1.5rem)"
              }
              zIndex={3}
              sx={{
                direction: "ltr",
                userSelect: "none",
                zIndex: 3,
                // borderBottom: "1px solid #fff",
              }}
            >
              Front-end Developer
            </Typography>
            <Divider
              className='divider'
              sx={{
                backgroundColor: primary,
                height: "1px",
                position: "relative",
                width: "70%",
                zIndex: 3,
              }}
            />
          </Box>
        </Box>
      </Grid2>

      <Grid2
        xs={12}
        sm={12}
        md={4}
        lg={6}
        xl={4}
        padding={"1rem"}
        display={"grid"}
        height={"50%"}
        alignItems={"center"}
        className={"skills-container"}
        gridTemplateColumns={"repeat(3, 1fr)"}
        position={{
          xs: "absolute",
          sm: "absolute",
          md: "relative",
          lg: "relative",
          xl: "relative",
        }}
        bottom={{
          xs: "0",
          sm: "0",
          md: "unset",
          lg: "unset",
          xl: "unset",
        }}
        sx={{
          opacity: {
            xs: 0.5,
            sm: 0.5,
            md: 1,
            lg: 1,
            xl: 1,
          },
          zIndex: {
            xs: 1,
            sm: 1,
            md: 1,
            lg: 1,
            xl: 1,
          },
          filter: {
            xs: "blur(1px) brightness(0.7)",
            sm: "blur(1px) brightness(0.7)",
            md: "blur(0px)",
            lg: "blur(0px)",
            xl: "blur(0px)",
          },
        }}
      >
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          className={"skills-item"}
        >
          <Tooltip title='React'>
            <img
              src={ReactLogo}
              alt=''
              width={"100%"}
              className='Logo'
            />
          </Tooltip>
        </Box>
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          className={"skills-item"}
        >
          <Tooltip title='Redux'>
            <img
              src={ReduxLogo}
              alt=''
              width={"100%"}
              className='Logo'
            />
          </Tooltip>
        </Box>

        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          className={"skills-item"}
        >
          <Tooltip title='JavaScript'>
            <img
              src={JSLogo}
              alt=''
              width={"100%"}
              className='Logo'
            />
          </Tooltip>
        </Box>

        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          className={"skills-item"}
        >
          <Tooltip title='TypeScript'>
            <img
              src={TSLogo}
              alt=''
              width={"100%"}
              className='Logo'
            />
          </Tooltip>
        </Box>

        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          className={"skills-item"}
        >
          <Tooltip title='HTML'>
            <img
              src={HTMLLogo}
              alt=''
              width={"100%"}
              className='Logo'
            />
          </Tooltip>
        </Box>

        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          className={"skills-item"}
        >
          <Tooltip title='CSS'>
            <img
              src={CSSLogo}
              alt=''
              width={"100%"}
              className='Logo'
            />
          </Tooltip>
        </Box>

        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          className={"skills-item"}
        >
          <Tooltip title='Sass'>
            <img
              src={SassLogo}
              alt=''
              width={"100%"}
              className='Logo'
            />
          </Tooltip>
        </Box>

        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          className={"skills-item"}
        >
          <Tooltip title='Git'>
            <img
              src={GitLogo}
              alt=''
              width={"100%"}
              className='Logo'
            />
          </Tooltip>
        </Box>
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          className={"skills-item"}
        >
          <Tooltip title='Vite'>
            <img
              src={ViteLogo}
              alt=''
              width={"100%"}
              className='Logo'
            />
          </Tooltip>
        </Box>
      </Grid2>
    </Grid2>
    ;
  </Box>
);
