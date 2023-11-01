import React from "react";
import "./project.css";
import { styled } from "@mui/material/styles";
// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";

// import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";
import OnlinePredictionIcon from "@mui/icons-material/OnlinePrediction";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";

import IconButton from "@mui/material/IconButton";

import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";

import chat from "../../assets/chat application.png";
import landingPage from "../../assets/landingpage.png";
import vms from "../../assets/visitor-management-system3.jpg";

function Projects() {
  return (
    <div id="projects">
      <div className="projects-title">
        <h2>Recent Projects</h2>
      </div>
      <div class="grid-container">
        <div class="grid-item">
          <Card sx={{ minWidth: 300 }}>
            <CardHeader
              title="Chat Application"
              subheader="September 14, 2016"
            />
            <CardMedia
              // sx={{ height: 300 }}
              component="img"
              height="194"
              image={chat}
              alt="Paella dish"
            />
            <CardContent></CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <a href="https://github.com/SahilPawar10/Chat_Application">
                  <GitHubIcon />
                </a>
              </IconButton>
              <IconButton aria-label="share">
                <a href="#">
                  <OnlinePredictionIcon />
                </a>
              </IconButton>
            </CardActions>
          </Card>
        </div>
        <div class="grid-item">
          <Card sx={{ minWidth: 300 }}>
            <CardHeader title="Landing Page" subheader="September 14, 2016" />
            <CardMedia
              component="img"
              height="194"
              image={landingPage}
              alt="Paella dish"
            />
            <CardContent></CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <a href="#">
                  <GitHubIcon />
                </a>
              </IconButton>
              <IconButton aria-label="share">
                <a href="https://voluble-bonbon-fffa7d.netlify.app/">
                  <OnlinePredictionIcon />
                </a>
              </IconButton>
            </CardActions>
          </Card>
        </div>
        <div class="grid-item">
          <Card sx={{ minWidth: 300 }}>
            <CardHeader title="VMS" subheader="September 14, 2016" />
            <CardMedia
              component="img"
              height="194"
              image={vms}
              alt="Paella dish"
            />
            <CardContent></CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <a href="https://github.com/SahilPawar10/VMS/">
                  <GitHubIcon />
                </a>
              </IconButton>
              <IconButton aria-label="share">
                <a href="#">
                  <OnlinePredictionIcon />
                </a>
              </IconButton>
            </CardActions>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Projects;
