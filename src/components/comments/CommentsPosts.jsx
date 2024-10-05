import { useQuery } from "@apollo/client";
import { Avatar, Box, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { GET_COMMENTS_POST } from "../../graphql/queries";

function CommentsPosts({ slug }) {
  const { loading, data, error } = useQuery(GET_COMMENTS_POST, {
    variables: { slug },
  });
  console.log(data);
  //   const { posts } = data;
  return (
    <>
      {data && (
        <Grid
          container
          boxShadow="#fff 4px 4px 12px"
          borderRadius={4}
          p={2}
          mt={10}
        >
          <Grid item xs={12} mb={3}>
            <Typography component="h6" variant="h5">
              Comments
            </Typography>
          </Grid>
          {data.comments.map((comment) => (
            <React.Fragment key={comment.id}>
              <Grid
                item
                border="1px #aaa solid"
                width="100%"
                sx={{ borderRadius: "10px", p: "20px" }}
                my={2}
              >
                <Box display="flex" alignItems="center" mb={5}>
                  <Avatar src={comment.name[0]} alt={comment.name[0]} />
                  <Typography component="h6" variant="h6" m color="#000">
                    {comment.name}
                  </Typography>
                </Box>
                <Typography
                  variant="h5"
                  component="h4"
                  color="#000"
                  fontSize="1.7rem"
                  my={2}
                >
                  {comment.comment}
                </Typography>
              </Grid>
            </React.Fragment>
          ))}
        </Grid>
      )}
    </>
  );
}

export default CommentsPosts;
