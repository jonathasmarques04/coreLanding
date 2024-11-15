import { Box, Button, Grid, Typography } from "@mui/material";

export default function CardFooter() {
  return (
    <Grid
      item
      xs={12}
      mt={10}
      sx={{
        height: "40vh",
        border: "1px solid #FFF",
        borderRadius: "15px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h3" sx={{ color: "#FFF", fontSize: { xs: 15, md: 40 } }}>
          Descubra CoreLanding!
        </Typography>
        <Button
          variant="contained"
          sx={{ background: "white", color: "black", fontWeight: "200" }}
          target="_blank"
          href="https://api.whatsapp.com/send?phone=5531975094045&text=Estou%20interessado%20em%20contratar%20seus%20servi%C3%A7os%20de%20desenvolvimento%20de%20sites!%20Poderia%20me%20passar%20mais%20informa%C3%A7%C3%B5es?"
        >
          Contato
        </Button>
      </Box>
    </Grid>
  );
}
