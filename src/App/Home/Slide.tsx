import { Box } from "@mui/material";
import React from "react";
import { checkVisible } from "../../functions/ui";

interface SlideProps {
  children?: React.ReactNode;
  id?: string;
  className?: string;
  style?: React.CSSProperties;
  zIndex?: number;
}

const Slide = (props: SlideProps) => {
  const ref = React.useRef<HTMLDivElement>(null);

  return (
    <Box
      id={props.id}
      ref={ref}
      className={props.className}
      style={props.style}
      width={1}
      height={"100dvh"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      zIndex={props.zIndex}
      sx={{
        scrollSnapAlign: "start",
      }}
    >
        {props.children}
    </Box>
  );
};

export default Slide;
