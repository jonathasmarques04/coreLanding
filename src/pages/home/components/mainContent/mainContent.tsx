import { Box, Button, Grid, Typography } from "@mui/material";

import { homeArticles } from "@/articles/home/articlesHome";
import Image from "next/image";

export default function MainContent() {
  return (
    <>
      <Grid container xs={12}>
        <Grid item xs={12} sx={{ display: { xs: 'block', md: 'flex' } }} gap={2}>
          <Grid item xs={12} md={6} display="block">
            <Box sx={{ bgcolor: "gray", borderRadius: 10, p: 5 }}>
              <Typography
                bgcolor="gray"
                color="#FFF"
                variant="h3"
                sx={{ mb: 4, overflow: "hidden" }}
              >
                {homeArticles.main1Title}
              </Typography>
              <Typography
                bgcolor="gray"
                color="#FFF"
                variant="h5"
                sx={{ mb: 3 }}
              >
                {homeArticles.main1Subtitle}
              </Typography>
              <Button
                variant="outlined"
                sx={{ border: "1px solid #FFF", color: "#FFF" }}
                href="https://www.instagram.com/corelanding/"
                target="_blank"
              >
                Explore
              </Button>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={4} 
          >
            <Image
              src="/images/2.png"
              height={500}
              width={500}
              layout="responsive"
              alt="mainImage"
            />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
