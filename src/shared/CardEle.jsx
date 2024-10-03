import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

function CardEle(props) {
  const { author, coverPhoto, slug, title } = props;
  return (
    <Card sx={{ backgroundColor: "#DBDFE5" }}>
      {author && (
        <CardHeader
          avatar={<Avatar src={author.avatar.url}></Avatar>}
          title={author.name}
        />
      )}
      <CardMedia
        component="img"
        image={coverPhoto.url}
        alt={title}
        height="250px"
      />
      <CardContent sx={{ height: "45px" }}>
        <Typography>{title}</Typography>
      </CardContent>
      <Divider variant="middle" />
      <Link to={`/blogs/${slug}`} style={{ textDecoration: "none" }}>
        <CardActions sx={{ padding: "10px" }}>
          <Button variant="outlined" sx={{ width: "100%", marginTop: "10px" }}>
            Read document
          </Button>
        </CardActions>
      </Link>
    </Card>
  );
}

export default CardEle;
