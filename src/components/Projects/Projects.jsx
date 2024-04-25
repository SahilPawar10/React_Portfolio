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
import Tooltip from "@mui/material/Tooltip";

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
import swarajya from "../../assets/swarajya.png";
import digihost from "../../assets/digihost.png";

function Projects() {
  return (
    <div id="projects">
      <div className="projects-title">
        <h2>Recent Projects</h2>
      </div>
      <div class="grid-container">
        <div class="grid-item">
          <Card sx={{ minWidth: 300 }}>
            <CardHeader title="NGO Website" subheader="Current" />
            <CardMedia
              component="img"
              height="194"
              image={swarajya}
              alt="Swarajya"
            />
            <CardContent></CardContent>
            <CardActions disableSpacing>
              <Tooltip title="Github Link">
                <IconButton aria-label="add to favorites">
                  <a href="https://github.com/SahilPawar10/Landingpage">
                    <GitHubIcon />
                  </a>
                </IconButton>
              </Tooltip>
              <Tooltip title="Hosted Link">
                <IconButton aria-label="share">
                  <a href="https://swarajyafoundation.netlify.app/">
                    <OnlinePredictionIcon />
                  </a>
                </IconButton>
              </Tooltip>
            </CardActions>
          </Card>
        </div>
        <div class="grid-item">
          <Card sx={{ minWidth: 300 }}>
            <CardHeader
              title="Digihot LandingPAge"
              subheader="December 10, 2023"
            />
            <CardMedia
              component="img"
              height="194"
              image={digihost}
              alt="Paella dish"
            />
            <CardContent></CardContent>
            <CardActions disableSpacing>
              <Tooltip title="Github Link">
                <IconButton aria-label="add to favorites">
                  <a href="https://sahilpawar10.github.io/digiHost/">
                    <GitHubIcon />
                  </a>
                </IconButton>
              </Tooltip>

              <Tooltip title="Hosted Link">
                <IconButton aria-label="share">
                  <a href="https://sahilpawar10.github.io/digiHost/">
                    <OnlinePredictionIcon />
                  </a>
                </IconButton>
              </Tooltip>
            </CardActions>
          </Card>
        </div>
        <div class="grid-item">
          <Card sx={{ minWidth: 300 }}>
            <CardHeader title="Landing Page" subheader="June 15, 2023" />
            <CardMedia
              component="img"
              height="194"
              image={landingPage}
              alt="Paella dish"
            />
            <CardContent></CardContent>
            <CardActions disableSpacing>
              <Tooltip title="Github Link">
                <IconButton aria-label="add to favorites">
                  <a href="https://github.com/SahilPawar10/Landingpage">
                    <GitHubIcon />
                  </a>
                </IconButton>
              </Tooltip>
              <Tooltip title="Hosted Link">
                <IconButton aria-label="share">
                  <a href="https://landingpage-sp.netlify.app/">
                    <OnlinePredictionIcon />
                  </a>
                </IconButton>
              </Tooltip>
            </CardActions>
          </Card>
        </div>
        <div class="grid-item">
          <Card sx={{ minWidth: 300 }}>
            <CardHeader title="Chat Application" subheader="March 21, 2023" />
            <CardMedia
              // sx={{ height: 300 }}
              component="img"
              height="194"
              image={chat}
              alt="Paella dish"
            />
            <CardContent></CardContent>
            <CardActions disableSpacing>
              <Tooltip title="Github Link">
                <IconButton aria-label="add to favorites">
                  <a href="https://github.com/SahilPawar10/Chat_Application">
                    <GitHubIcon />
                  </a>
                </IconButton>
              </Tooltip>
              <Tooltip title="Hosted Link">
                <IconButton aria-label="share">
                  <a href="#">
                    <OnlinePredictionIcon />
                  </a>
                </IconButton>
              </Tooltip>
            </CardActions>
          </Card>
        </div>

        <div class="grid-item">
          <Card sx={{ minWidth: 300 }}>
            <CardHeader title="VMS" subheader="September 20, 2023" />
            <CardMedia
              component="img"
              height="194"
              image={vms}
              alt="Paella dish"
            />
            <CardContent></CardContent>
            <CardActions disableSpacing>
              <Tooltip title="Github Link">
                <IconButton aria-label="add to favorites">
                  <a href="https://github.com/SahilPawar10/VMS/">
                    <GitHubIcon />
                  </a>
                </IconButton>
              </Tooltip>

              <Tooltip title="Hosted Link">
                <IconButton aria-label="share">
                  <a href="#">
                    <OnlinePredictionIcon />
                  </a>
                </IconButton>
              </Tooltip>
            </CardActions>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Projects;
