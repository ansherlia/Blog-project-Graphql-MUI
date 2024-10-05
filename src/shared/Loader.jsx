import { Grid } from "@mui/material";
import React from "react";
import { ThreeCircles } from "react-loader-spinner";

function Loader() {
  return (
    <Grid
      container
      maxWidth="lg"
      display="flex"
      justifyContent="center"
    //   my="10px"
      alignItems="center"
      mx="auto"
      height="400px"
    >
      <ThreeCircles width="80" height="80" />
    </Grid>
  );
}

export default Loader;
