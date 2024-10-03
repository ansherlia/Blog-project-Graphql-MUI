import { Box, Grid, Typography } from "@mui/material";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
function PageNotFound() {
  return (
    <Grid>
      <Box
        component="div"
        display="flex"
        alignItems="center"
        justifyContent="center"
        my={46}
      >
        <Typography fontWeight={700} textAlign="center" fontSize={55}>
          Page Not Found
        </Typography>
        <SentimentVeryDissatisfiedIcon style={{ fontSize: "3.2rem" }} />
      </Box>
    </Grid>
  );
}

export default PageNotFound;
