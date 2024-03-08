import {
  Card,
  CardContent,
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

export default function Home() {
  return (
    <Box sx={{ maxWidth: 1200, margin: "auto" }}>
      <Card>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}>
          <Typography sx={{ fontSize: 28 }} color="text.secondary" gutterBottom>
            Koji Sonoda/園田 浩二
          </Typography>
        </CardContent>
      </Card>
      <Typography sx={{ marginTop: 2, textAlign: "left" }} variant="h5">
        Education
      </Typography>
      <List>
        <ListItem sx={{ display: "flex" }}>
          <ListItemText
            sx={{ textAlign: "left" }}
            primary="Bachelor's degree of Engineering, The University of Tokyo, Japan"
          />
          <ListItemText
            sx={{ textAlign: "right", color: "text.secondary" }}
            primary="April 2023 - Present"
          />
        </ListItem>
        <ListItem sx={{ display: "flex" }}>
          <ListItemText
            sx={{ textAlign: "left" }}
            primary="Associate's degree of Engineering, National Institute of Technology(KOSEN), Akashi College, Japan"
          />
          <ListItemText
            sx={{ textAlign: "right", color: "text.secondary" }}
            primary="April 2018 - March 2023"
          />
        </ListItem>
      </List>
      <Typography sx={{ marginTop: 2, textAlign: "left" }} variant="h5">
        Internships / Employments
      </Typography>
      <Typography sx={{ marginTop: 2, textAlign: "left" }} variant="h5">
        Publications
      </Typography>
      <Typography sx={{ marginTop: 2, textAlign: "left" }} variant="h5">
        Articles
      </Typography>
      <Typography sx={{ marginTop: 2, textAlign: "left" }} variant="h5">
        Awards / Honors
      </Typography>
      <Typography sx={{ marginTop: 2, textAlign: "left" }} variant="h5">
        Qualifications
      </Typography>
      <Typography sx={{ marginTop: 2, textAlign: "left" }} variant="h5">
        Blog
      </Typography>
    </Box>
  );
}
