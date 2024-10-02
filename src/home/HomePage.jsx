import { Container, Grid, Typography } from "@mui/material";
import Author from "../components/authors/Author";
import Blogs from "../components/blogs/Blogs";

function HomePage() {
  return (
    <Container maxWidth="lg">
      <Grid container padding={3} mt={2} spacing={5}>
        <Grid item>
          <Typography
            fontSize="2.5rem"
            fontWeight={700}
            variant="h4"
            component="h5"
          >
            Authors
          </Typography>
          <Author />
        </Grid>
        <Grid item ml="120px">
          <Typography
            fontSize="2.5rem"
            fontWeight={700}
            variant="h4"
            component="h5"
          >
            Blogs
          </Typography>
          <Blogs />
        </Grid>
      </Grid>
    </Container>
  );
}

export default HomePage;
