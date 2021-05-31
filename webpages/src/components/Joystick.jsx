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

const Joystick = () => {
    const classes = useStyle();
    return (
        <>
            <Grid container justify={"center"} className={classes.root}>
                <Grid item xs={4}>
                </Grid>
                <Grid item xs={4}>
                    <Button variant={"contained"}>UP</Button>
                </Grid>
                <Grid item xs={4}>
                </Grid>
                <Grid item xs={4}>
                    <Button variant={"contained"}>LEFT</Button>
                </Grid>
                <Grid item xs={4}>
                    <Button variant={"contained"}>enter</Button>
                </Grid>
                <Grid item xs={4}>
                    <Button variant={"contained"}>RIGHT</Button>
                </Grid>
                <Grid item xs={4}>
                </Grid>
                <Grid item xs={4}>
                    <Button variant={"contained"}>DOWN</Button>
                </Grid>
                <Grid item xs={4}>
                </Grid>
            </Grid>
        </>
    )
}

export default Joystick;