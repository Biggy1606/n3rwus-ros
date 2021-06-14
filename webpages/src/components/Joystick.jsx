import React from 'react';
import { Grid, Button, makeStyles } from '@material-ui/core';

const useStyle = makeStyles(theme => ({
    root: {
        height: 256, width: 256,
        '& .MuiButton-root': {
            width: 50,
        }
    }
}));

const Joystick = (props) => {
    const classes = useStyle();
    return (
        <>
            <Grid container justify={"center"} className={classes.root}>
                <Grid item xs={4}>
                </Grid>
                <Grid item xs={4}>
                    <Button variant={"contained"} onClick={props.up}>UP</Button>
                </Grid>
                <Grid item xs={4}>
                </Grid>
                <Grid item xs={4}>
                    <Button variant={"contained"} onClick={props.left}>LEFT</Button>
                </Grid>
                <Grid item xs={4}>
                    <Button variant={"contained"}>enter</Button>
                </Grid>
                <Grid item xs={4}>
                    <Button variant={"contained"} onClick={props.right}>RIGHT</Button>
                </Grid>
                <Grid item xs={4}>
                </Grid>
                <Grid item xs={4}>
                    <Button variant={"contained"} onClick={props.down}>DOWN</Button>
                </Grid>
                <Grid item xs={4}>
                </Grid>
            </Grid>
        </>
    )
}

export default Joystick;