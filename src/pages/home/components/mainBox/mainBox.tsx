import { Box, Grid, Typography } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';

import { boxInformation } from "@/articles/home/articlesHome";

export default function MainBox() {
  return (
    <>
      <Grid container xs={12} mt={10} sx={{ border: '1px solid #FFF', borderRadius: '15px', p: 2 }}>
        <Grid item xs={12}>
          <Box display='block'>
            <Typography variant='h6' sx={{ color: '#FFF' }}>Inovação sobressai</Typography>
            <Typography variant='h4' sx={{ color: '#FFF' }}>Inove com soluções sob medida</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} display='flex' sx={{ gap: 4, justifyContent: 'space-between', mt: 10, flexDirection: { xs: 'column', md: 'column', lg: 'row' }}}>
          {
            boxInformation.map((info, i) => {
              return (
                <Box display='flex' justifyContent='center' alignItems='center' key={i}>
                  <Box sx={{ margin: '0 auto', padding: '20px', backgroundColor: 'gray', borderRadius: 5, width: '90%', height: '90%' }}>
                    {
                      info.hasAttribute == true ? ( <StarIcon fontSize="large" sx={{ color: 'white' }}/> ) : ""
                    }
                    <Typography variant='h5' sx={{ color: '#FFF' }}>{info.title}</Typography>
                    <Typography variant='body2' sx={{ color: '#FFF' }}>{info.message}</Typography>
                    
                  </Box>
                </Box>
              )
            })
          }
        </Grid>
      </Grid>
    </>
  );
}
