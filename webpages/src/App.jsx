import React, { useState } from "react";
import { CssBaseline, Grid, makeStyles, Button, TextField, FormHelperText } from '@material-ui/core';
import ROSLIB from "roslib";
import Joystick from "./components/Joystick"

const useStyle = makeStyles((theme) => ({
  root: {
    '& .MuiButton-root': {
      margin: 10,
      width: 250,
    }
  },
  paper: {
    padding: theme.spacing(2),
  },
  connected: {
    background: "green",
    color: "white",
  },
  connecting: {
    background: "orange",
  },
  disconnected: {
    background: "red",
    color: "white",
  },
}))

// Piekny enum <3
const connectionStatuses = { 1: "Disconnect", 2: "Connecting", 3: "Connected", 4: "Error" }
Object.freeze(connectionStatuses);

function App() {
  const classes = useStyle();
  const [connection, setConnection] = useState(1);
  const [url, setUrl] = useState("");
  const [topic, setTopic] = useState(null);

  const connectToWs = () => {
    var ros = new ROSLIB.Ros({
      url: `ws://${url}`
    });

    ros.on('connection', function () {
      console.log('Connected to websocket server.');
      setConnection(3);
    });

    ros.on('error', function (error) {
      console.log('Error connecting to websocket server: ', error);
      setConnection(4);
    });

    ros.on('close', function () {
      setConnection(1);
      console.log('Connection to websocket server closed.');
    });
  }

  const renderConnectButton = (onclick) => {
    if (connection === 1)
      return (<Button onClick={onclick} variant={"contained"} className={classes.disconnected}>connect</Button>);
    else if (connection === 2 || 4 || 3)
      return (<Button onClick={onclick} disabled variant={"contained"} className={classes.connecting}>connect</Button>);
  }
  const renderStartButton = (onclick) => {
    if (connection === connectionStatuses.connected) {
      return <Button onClick={onclick} variant={"contained"}>start the procedure</Button>
    } else {
      return <Button disabled variant={"contained"}>start the procedure</Button>
    }
  }
  const renderExecuteButton = (onclick) => {
    if (connection === connectionStatuses.connected) {
      return <Button onClick={onclick} variant={"contained"}>execute order 66</Button>
    } else {
      return <Button disabled variant={"contained"}>execute order 66</Button>
    }
  }

  const handleInput = (e) => {
    console.log(e.target.value);
    setUrl(e.target.value);
  }

  const createTopic = () => {
    setTopic(new ROSLIB.Topic({
      ros: this.ros,
      name: '/cmd_vel',
      messageType: 'geometry_msgs/Twist' //TODO <-- Change that as u need
    }))
    console.log(`Topic: ${topic}`);
  }

  return (
    <div >
      <CssBaseline />
      <Grid container justify="center" direction="column"
        alignItems="center" style={{ margin: "20px" }} className={classes.root}>

        <Grid item xs={12}>
          <TextField id="outlined-basic" label="URL" variant="outlined" label={"url without ws://"} onChange={handleInput} />
          <FormHelperText>{connectionStatuses[connection]}</FormHelperText>
        </Grid>

        <Grid item xs={12}>
          {renderConnectButton(() => {
            setConnection(2);
            connectToWs();
          })}
        </Grid>

        <Grid item xs={12}>
          {renderStartButton(() => {
            createTopic();
          })}
        </Grid>

        <Grid item xs={12}>
          {renderExecuteButton(() => setConnection(2))}
        </Grid>

      </Grid>
      <Joystick />
    </div>
  );
}

export default App;
