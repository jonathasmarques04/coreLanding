import { Grid } from "@mui/material";
import Home from "./home/home";

export default function home() {
  return (
    <>
      <Grid container xs={10} margin='auto'>
      <Home />
      </Grid>
    </>
  );
}
