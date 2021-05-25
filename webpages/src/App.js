import React, { useState } from "react";
import { CssBaseline, Grid, makeStyles, Button, TextField } from '@material-ui/core';

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
const connectionStatuses = { "disconnect": 1, "connecting": 2, "connected": 3 }
Object.freeze(connectionStatuses);

function App() {
  const classes = useStyle();
  const [connection, setConnection] = useState(1);

  const renderConnectButton = (onclick) => {
    if (connection === 1)
      return (<Button onClick={onclick} variant={"contained"} className={classes.disconnected}>connect</Button>);
    else if (connection === 2)
      return (<Button onClick={onclick} variant={"contained"} className={classes.connecting}>connect</Button>);
    else if (connection === 3)
      return (<Button onClick={onclick} variant={"contained"} className={classes.connected}>connect</Button>);
  }
  const renderStartButton = (onclick) => {
    if(connection === connectionStatuses.connected) {
      return <Button onClick={onclick} variant={"contained"}>start the procedure</Button>
    } else {
      return <Button disabled variant={"contained"}>start the procedure</Button>
    }
  }
  const renderExecuteButton = (onclick) => {
    if(connection === connectionStatuses.connected) {
      return <Button onClick={onclick} variant={"contained"}>execute order 66</Button>
    } else {
      return <Button disabled variant={"contained"}>execute order 66</Button>
    }
  }

  return (
    <div >
      <CssBaseline />
      <Grid container justify="center" direction="column"
        alignItems="center" style={{ margin: "20px" }} className={classes.root}>

        <Grid item xs={12}>
          <form className={classes.input} noValidate autoComplete="off">
            <TextField id="outlined-basic" label="URL" variant="outlined" />
          </form>
        </Grid>

        <Grid item xs={12}>
          {renderConnectButton(() => setConnection(3))}
        </Grid>

        <Grid item xs={12}>
          {renderStartButton(() => setConnection(1))}
        </Grid>

        <Grid item xs={12}>
          {renderExecuteButton(() => setConnection(2))}
        </Grid>
        
      </Grid>
    </div>
  );
}

export default App;
