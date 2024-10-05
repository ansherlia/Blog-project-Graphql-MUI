import { useQuery } from "@apollo/client";
import { GET_BLOG_INFO } from "../../graphql/queries";
import { Link, useParams } from "react-router-dom";
import { Container, Grid, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
function BlogsPage() {
  const { slug } = useParams();
  const { loading, data, error } = useQuery(GET_BLOG_INFO, {
    variables: { slug },
  });
  console.log(data);
  // const { author, coverPhoto, title, content } = data;

  // console.log(author);
  return (
    <>
      {data && (
        <Container maxWidth="lg">
          <Grid container p={3} mt={3}>
            <Grid
              item
              xs={12}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography
                component="h4"
                variant="h5"
                fontSize="1.8rem"
                fontWeight={700}
              >
                {data.post.title}
              </Typography>
              <Link to={`/`}>
                <ArrowBackIcon
                  style={{ fontSize: "2.5rem", color: "#696900" }}
                />
              </Link>
            </Grid>
            <Grid item xs={12} mt={4}>
              <img
                src={data.post.coverPhoto.url}
                height="700px"
                width="100%"
                style={{ borderRadius: "10px" }}
              />
            </Grid>
          </Grid>
        </Container>
      )}
    </>
  );
}

export default BlogsPage;
//title, coverPHoto, author, content
