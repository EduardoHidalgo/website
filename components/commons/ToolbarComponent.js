import '../../src/bootstrap';
import React from 'react';
import Link from 'next/link';
import { makeStyles } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    link: {
        color: 'white',
        textDecoration: 'none',
        transition: 'transform .2s',
        transformOrigin: 'left',
        '&:hover': {
            transform: 'scale(1.2)'
        }
    }
}));

function ButtonAppBar(props) {
    const classes = useStyles();

    return (
        <AppBar position="static">
            <Toolbar>
                <Link href={'/'}><a className={classes.link}>
                    <Typography variant="title" color="inherit">
                    Pokedex
                    </Typography>   
                </a></Link>
            </Toolbar>
        </AppBar>
    );
}

export default ButtonAppBar;