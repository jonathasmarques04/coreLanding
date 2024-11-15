import { Grid } from "@mui/material";

import MainContent from "./components/mainContent/mainContent";
import MainInformation from "./components/mainInformation/mainInformation";

import MainBox from "./components/mainBox/mainBox";
import CardFooter from "./components/cardFooter/cardFooter";
import Header from "./components/header/Header";

export default function Home() {
  return (
    <>
      <Grid container xs={12}>
        <Header />
        <MainContent />
        <MainInformation />
        <MainBox />
        <CardFooter />
      </Grid>
    </>
  );
}
