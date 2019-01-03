import React, { useEffect, useState } from "react";
import '../src/bootstrap';
import { makeStyles } from '@material-ui/styles';
import { Paper, Grid, Typography } from '@material-ui/core';

// Para hacer uso de estilos de material ui es necesario "makeStyles", tal cual.
const useStyles = makeStyles(theme => ({
    '@keyframes entering': {
        '0%': {
          opacity: 1,
        },
        '100%': {
          opacity: 0,
        },
      },
    root: {
        padding: theme.spacing.unit * 4,
        flexGrow: 1,
        position: 'absolute',
        width: '100vw',
        height: '1000vh'
    },
    paper: {
        paddingTop: theme.spacing.unit * 1,
        paddingBottom: theme.spacing.unit * 1,
        background: 'transparent',
        color: 'white',
        boxShadow: 'none'
    },
    paperDivider: {
        animation: "entering 2s",
    },
    title: {
        color: 'white',
        fontFamily: 'Oswald, sans-serif',
        paddingLeft: '0',
        animation: "2s fadeAnimation",
    },
    textDivider: {
        color: 'black',
        fontFamily: 'Oswald, sans-serif',
        paddingLeft: theme.spacing.unit * 1,
        paddingRight: theme.spacing.unit * 1
    }
}));

function Content(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container direction="column" justify="flex-start"
            alignItems="flex-start" spacing={0}>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>
                        <Typography variant={'h4'} className={classes.title}>EDUARDO HIDALGO</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                <Paper className={classes.paperDivider}>
                        <Typography variant={'h6'} className={classes.textDivider}>SOFTWARE ENGINEER & FULLSTACK DEVELOPER</Typography>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default Content;
