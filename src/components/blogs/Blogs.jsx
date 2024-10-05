import { useQuery } from "@apollo/client";
import { GET_BLOGS_INFO } from "../../graphql/queries";
import { Grid } from "@mui/material";
import CardEle from "../../shared/CardEle";
import Loader from "../../shared/Loader";

function Blogs() {
  const { loading, data, error } = useQuery(GET_BLOGS_INFO);
  console.log({ loading, data });
  if (loading) return <Loader />;
  if (error) return <h2>{error.message}</h2>;
  const { posts } = data;
  return (
    <Grid container spacing={2}>
      {data.posts.map((post) => (
        <Grid item key={post.id} maxWidth="lg" xs={12} sm={6} md={4}>
          <CardEle {...post} />
        </Grid>
      ))}
    </Grid>
  );
}

export default Blogs;
