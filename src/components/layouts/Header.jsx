import { AppBar, Typography } from "@mui/material";

function Header() {
  return (
    <Typography
      sx={{
        backgroundColor: "#1976d3",
        textAlign: "center",
        color: "#fff",
        marginTop: "100px",
      }}
      fontSize={25}
      p={1.7}
      fontWeight={600}
    >
      This is a Blog project with graphql & graphCMS & MUI
    </Typography>
  );
}

export default Header;
