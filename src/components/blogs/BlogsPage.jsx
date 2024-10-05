import { useQuery } from "@apollo/client";
import { GET_BLOG_INFO } from "../../graphql/queries";
import { Link, useParams } from "react-router-dom";
import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import sanitizeHtml from "sanitize-html";
import ComponentForm from "../comments/ComponentForm";
import CommentsPosts from "../comments/CommentsPosts";
import Loader from "../../shared/Loader";
function BlogsPage() {
  const { slug } = useParams();
  const { loading, data, error } = useQuery(GET_BLOG_INFO, {
    variables: { slug },
  });
  console.log(data);
  // const { author, coverPhoto, title, content } = data;
  if (loading) return <Loader />;
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
            <Grid item my={5} display="flex" alignItems="center" width="100%">
              <Avatar
                src={data.post.author.avatar.url}
                sx={{ width: "80px", height: "80px" }}
              />
              <Box ml={1.5}>
                <Typography color="#000" fontWeight={600} fontSize="1.5rem">
                  {data.post.author.name}
                </Typography>
                <Typography color="#000" fontWeight={400} fontSize="1.2rem">
                  {data.post.author.field}
                </Typography>
              </Box>
            </Grid>
            <Grid item sx={{ fontSize: "1.1rem", lineHeight: "30px" }}>
              <div
                dangerouslySetInnerHTML={{
                  __html: sanitizeHtml(data.post.content.html),
                }}
              ></div>
            </Grid>
            <Grid item width="100%">
              <ComponentForm slug={slug} />
            </Grid>
            <CommentsPosts slug={slug} />
          </Grid>
        </Container>
      )}
    </>
  );
}

export default BlogsPage;
//title, coverPHoto, author, content
