import { Box } from "@mui/material";

interface SlideProps {
  children?: React.ReactNode;
  id?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Slide = (props: SlideProps) => {

  return (
    <Box
      id={props.id}
      className={props.className}
      style={props.style}
      width={1}
      height={"100dvh"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      sx={{
        scrollSnapAlign: "start",
      }}
    >
        {props.children}
    </Box>
  );
};

export default Slide;
