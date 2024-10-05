import { useMutation } from "@apollo/client";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { CREATE_COMMENT } from "../../graphql/mutation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SendIcon from "@mui/icons-material/Send";
import CommentsPosts from "./CommentsPosts";
function ComponentForm({ slug }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [creatComment, { loading, data, error }] = useMutation(CREATE_COMMENT, {
    variables: { name, email, comment, slug },
  });
  const creatCommentHandler = () => {
    if (name && email && comment && !loading) {
      creatComment();
      setEmail("");
      setName("");
      setComment("");
      toast.success("Comment sended", { position: "top-center" });
    } else {
      toast.warn("Please completed the field!", { position: "top-center" });
    }
  };
  console.log(data);
  return (
    <Grid
      container
      boxShadow="#fff 4px 4px 12px"
      borderRadius={4}
      p={2}
      mt={10}
    >
      <Grid item>
        <Typography
          component="h6"
          variant="h5"
          fontWeight={700}
          my={3}
          color="#000"
        >
          Comment submission Form
        </Typography>
      </Grid>
      <Grid item xs={12} padding={2} m={2}>
        <TextField
          id="filled-basic"
          label="Name"
          variant="filled"
          sx={{ width: "100%" }}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Grid>
      <Grid item xs={12} padding={2} m={2}>
        <TextField
          id="filled-basic"
          label="Email"
          variant="filled"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          sx={{ width: "100%" }}
        />
      </Grid>
      <Grid item xs={12} padding={2} m={2}>
        <TextField
          onChange={(e) => setComment(e.target.value)}
          value={comment}
          id="filled-basic"
          label="Comment"
          variant="filled"
          sx={{ width: "100%" }}
          multiline
          minRows={10}
        />
      </Grid>
      <Grid item xs={12} padding={2} m={2}>
        {loading ? (
          <Button variant="contained" disabled endIcon={<SendIcon />}>
            Sending...
          </Button>
        ) : (
          <Button
            variant="contained"
            onClick={creatCommentHandler}
            endIcon={<SendIcon />}
          >
            Send
          </Button>
        )}
      </Grid>
      <ToastContainer />
    </Grid>
  );
}

export default ComponentForm;
