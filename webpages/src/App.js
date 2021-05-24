import React from "react";
import { CssBaseline, Typography, Grid, makeStyles, Paper, Button } from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
  },
}))

function App() {
  const classes = useStyle();
  return (
    <div >
      <CssBaseline />
      <Grid container justify={"center"} style={{ margin: "20px" }}>
        <Grid item xs={12}>
          <Typography variant={"h2"}>Hello from ROS!</Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
