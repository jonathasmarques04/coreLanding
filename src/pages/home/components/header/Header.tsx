import { Box, Button, Grid } from "@mui/material";
import Image from "next/image";

export default function Header() {
  return (
    <>
      <Grid container xs={12}>
        <Grid item xs={12} sx={{ display: "flex",
          justifyContent: "space-between",
          alignItems: "center", height: 'fit-content' }}>
          <Box>
            <Image src='/images/2.png' width={150} height={150} alt="image" style={{ cursor: 'pointer' }}/>
          </Box>
          <Box>
            <Button variant="outlined" sx={{ border: "1px solid #FFF", color: "#FFF" }} target="_blank" href="https://api.whatsapp.com/send?phone=5531975094045&text=Estou%20interessado%20em%20contratar%20seus%20servi%C3%A7os%20de%20desenvolvimento%20de%20sites!%20Poderia%20me%20passar%20mais%20informa%C3%A7%C3%B5es?">Contate-nos</Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
