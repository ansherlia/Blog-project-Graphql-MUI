import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { GET_AUTHOR_INFO } from "../../graphql/queries";
import { Avatar, Container, Grid, Typography } from "@mui/material";
import sanitizeHtml from "sanitize-html";
import CardEle from "../../shared/CardEle";
function AuthorPage() {
  const { slug } = useParams();
  const { loading, data, error } = useQuery(GET_AUTHOR_INFO, {
    variables: { slug },
  });
  // const { author } = data;
  console.log(data);
  return (
    <>
      {data && (
        <Container maxWidth="lg">
          <Grid container>
            <Grid
              item
              width="100%"
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "100px",
                flexDirection: "column",
              }}
            >
              <Avatar
                src={data.author.avatar.url}
                alt={data.author.name}
                sx={{ width: "310px", height: "330px" }}
              />
              <Typography fontWeight={700} fontSize="1.8rem" my={2}>
                {data.author.name}
              </Typography>
              <Typography textAlign="center" fontWeight={500} fontSize="1.2rem">
                {data.author.field}
              </Typography>
            </Grid>
            <Grid lineHeight="30px" fontSize="1.1rem" mt={5}>
              <div
                dangerouslySetInnerHTML={{
                  __html: sanitizeHtml(data.author.description.html),
                }}
              ></div>
            </Grid>
            <Typography mt={10} fontSize="1.7rem" fontWeight={700}>
              Articels by {data.author.name}
            </Typography>
            <Grid container textAlign="left" spacing={2} xs={12} mt={2}>
              {data.author.post.map((pos) => (
                <Grid key={pos.id} item xs={12} md={4}>
                  <CardEle
                    coverPhoto={pos.coverPhoto}
                    title={pos.title}
                    slug={pos.slug}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Container>
      )}
    </>
  );
}

export default AuthorPage;
