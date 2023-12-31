import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import StarRate from "@mui/icons-material/StarRate";
import NavigationIcon from "@mui/icons-material/Navigation";
import Fab from "@mui/material/Fab";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import ShowReviews from "../showReviews"
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import ShowCredits from "../showCredits";


const root = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
};
const chip = { margin: 0.5 };

const ShowDetails = ({ show }) => {  // Don't miss this!
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <Typography variant="h5" component="h3">
        Overview
      </Typography>

      <Typography variant="h6" component="p">
        {show.overview}
      </Typography>

      <Paper 
        component="ul" 
        sx={{...root}}
      >
        <li>
          <Chip label="Genres" sx={{...chip}} color="primary" />
        </li>
        {show.genres.map((g) => (
          <li key={g.name}>
            <Chip label={g.name} sx={{...chip}} />
          </li>
        ))}
      </Paper>
      <Paper component="ul" sx={{...root}}>
        <Chip icon={<AccessTimeIcon />} label={`${show.episode_run_time} min.`} />
        <Chip
          icon={<StarRate />}
          label={`${show.vote_average} (${show.vote_count}`}
        />
        </Paper>
      <Paper component="ul" sx={{...root}}>
      <Chip
          label={`${show.number_of_episodes} episodes`}
        />
        <Chip
          label={`Number of Seasons: ${show.number_of_seasons}`}
        />
        <Chip label={`First Aired: ${show.first_air_date}`} />
      </Paper>
      <Paper component="ul" sx={{...root}}>
      <li>
          <Chip label="Production Countries" sx={{...chip}} color="primary" />
        </li>
        {show.production_countries.map((g) => (
          <li key={g.name}>
            <Chip label={g.name} sx={{...chip}} />
          </li>
          ))}
      </Paper>
      <Paper component="ul" sx={{...root}}>
      <Button component={Link} to={`/tv/similar/${show.id}`} variant="contained" color="primary">
  Similar Shows
</Button>
<ShowCredits show={show} />
      </Paper>
      <Fab
        color="secondary"
        variant="extended"
        onClick={() =>setDrawerOpen(true)}
        sx={{
          position: 'fixed',
          bottom: '1em',
          right: '1em'
        }}
      >
        <NavigationIcon />
        Reviews
      </Fab>
      <Drawer
      PaperProps={{
        sx: { width: "90%" },
      }}
      
      anchor="top" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <ShowReviews show={show} />
      </Drawer>
      </>
  );
};
export default ShowDetails ;