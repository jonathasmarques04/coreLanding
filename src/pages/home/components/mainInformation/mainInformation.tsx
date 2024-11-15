import { Box, Grid, Typography } from "@mui/material";

import { homeArticles } from "@/articles/home/articlesHome";

export default function MainInformation() {
  return (
    <>
          <Grid item xs={12} sx={{ textAlign: { xs: 'center', lg: 'initial' } } }>
            <Typography variant="h4" sx={{ color: "#FFF", fontSize: { xs: 24, md: 32 } }}>{homeArticles.main1Description}</Typography>
          </Grid>
          <Grid item xs={12} mt={4} sx={{ display: 'flex', justifyContent: 'space-between', gap: 20, p: 2, border: '1px solid #FFF', borderRadius: '15px', flexDirection: { xs: 'column', md: 'column', lg: 'row' }}}>
            <Box display='flex' sx={{ flexDirection: { xs: 'column' } }}>
              <Typography variant="body1" sx={{ color: "#FFF" }}>{homeArticles.main2Title}</Typography>
              <Typography variant="h6" sx={{ color: "#FFF" }}>{homeArticles.main2Subtitle}</Typography>
            </Box>
            <Box>
              <Typography variant="h6" sx={{ color: "#FFF" }}>{homeArticles.main2Description}</Typography>
            </Box>
          </Grid>
    </>
  );
}
