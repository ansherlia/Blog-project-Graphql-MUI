import { useQuery } from "@apollo/client";
import { GET_AUTHORS_INFO } from "../../graphql/queries";
import { Avatar, Box, Divider, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";

function Author() {
  const { loading, data, error } = useQuery(GET_AUTHORS_INFO);
  console.log({ loading, data, error });
  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>{error.message}</h2>;
  return (
    <Grid container bgcolor="#DBDFE5" borderRadius={2}>
      {data.authors.map((author) => (
        <React.Fragment key={author.id}>
          <Grid item xs={12}>
            <Link
              to={`/author/${author.slug}`}
              style={{ textDecoration: "none" }}
            >
              <Box
                display="flex"
                // justifyContent="space-between"
                alignItems="center"
                padding={2}
              >
                <Avatar
                  src={author.avatar.url}
                  alt={null}
                  sx={{ height: "50px", width: "50px" }}
                />
                <Typography ml={1} fontSize={15} color="#001">
                  {author.name}
                </Typography>
              </Box>
            </Link>
            <Grid item xs={12}>
              <Divider variant="middle" />
            </Grid>
          </Grid>
        </React.Fragment>
      ))}
    </Grid>
  );
}

export default Author;
