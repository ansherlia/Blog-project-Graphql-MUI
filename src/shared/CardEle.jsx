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

function CardEle(props) {
  const { author, coverPhoto, slug, title, content } = props;
  return (
    <Card sx={{ backgroundColor: "#DBDFE5" }}>
      <CardHeader
        avatar={<Avatar src={author.avatar.url}></Avatar>}
        title={author.name}
      />
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
      <CardActions sx={{ padding: "10px" }}>
        <Button variant="outlined" sx={{ width: "100%", marginTop: "10px" }}>
          Read document
        </Button>
      </CardActions>
    </Card>
  );
}

export default CardEle;
