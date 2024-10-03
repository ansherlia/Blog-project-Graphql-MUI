import { Container, Grid, Typography } from "@mui/material";
import Author from "../components/authors/Author";
import Blogs from "../components/blogs/Blogs";

function HomePage() {
  return (
    <Container maxWidth="lg">
      <Grid container padding={3} mt={2} spacing={3} minHeight={1000}>
        <Grid item xs={12} md={3}>
          <Typography
            fontSize="2rem"
            fontWeight={700}
            variant="h4"
            component="h5"
            border="1px #5887D3 solid"
            padding={1}
            borderRadius={3}
            textAlign="center"
            fontFamily="Arial"
            mb={5}
          >
            Authors
          </Typography>
          <Author />
        </Grid>
        <Grid item xs={12} md={9}>
          <Typography
            fontSize="2rem"
            fontWeight={700}
            variant="h4"
            component="h5"
            border="1px #5887D3 solid"
            padding={1}
            borderRadius={3}
            textAlign="center"
            fontFamily="Arial"
            mb={5}
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
