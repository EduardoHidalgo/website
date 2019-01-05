import React, { useEffect, useState, Fragment } from "react";
import Link from 'next/link';
import '../src/bootstrap';
import { makeStyles } from '@material-ui/styles';
import { Paper, Grid, Typography, withWidth } from '@material-ui/core';
import { Hidden } from '@material-ui/core';
import '../src/styles/component.css';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing.unit * 4,
        flexGrow: 1,
        position: 'absolute',
        width: '100vw',
        height: '100vh',
        zIndex: '100'
    },
    //estilos de grids
    grid_container: {
        [theme.breakpoints.up('md')]: {
            width: '50vw'
          }
    },
    grid_divider: {
        paddingTop: '5px'
    },
    grid_portfolio: {
        paddingTop: theme.spacing.unit * 4,
        paddingRight: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 4
    },
    grid_proyects: {
        paddingBottom: theme.spacing.unit * 4,
    },
    grid_skills: {
        paddingTop: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
    },
    grid_contact: {
        paddingTop: theme.spacing.unit * 4,
        paddingBottom: theme.spacing.unit * 4,
    },
    //estilos de papers
    paper_name: {
        background: 'transparent',
        color: 'white',
        boxShadow: 'none'
    },
    paper_job: {
        paddingTop: theme.spacing.unit * 3,
        background: 'transparent',
        color: 'white',
        boxShadow: 'none'
    },
    paper_portfolio: {
        background: 'rgba(0, 0, 0, 0.10)',
        height: '80px',
        borderBottom: '3px solid white',
    },
    paper_proyect: {
        background: 'transparent',
        color: 'white',
        boxShadow: 'none',
        width: '100%',
        [theme.breakpoints.down('sm')]: {
            textAlign: 'center'
        }
    },
    paper_skills: {
        background: 'white',
        color: 'black',
        boxShadow: 'none',
        '&:hover': {
            background: 'gray',
        }
    },
    // estilos de tipografias
    typo_name: {
        color: 'white',
        fontFamily: 'Oswald, sans-serif',
        paddingLeft: '0',
    },
    typo_textdivider: {
        color: 'black',
        fontFamily: 'Oswald, sans-serif',
        paddingLeft: theme.spacing.unit * 1,
        paddingRight: theme.spacing.unit * 1
    },
    typo_text: {
        color: 'white',
        fontFamily: 'PT Sans Narrow, sans-serif',
        fontWeight: '300',
        paddingLeft: '0',
        display: 'inline-block'
    },
    typo_proyect: {
        color: 'white',
        fontFamily: 'PT Sans Narrow, sans-serif',
        fontWeight: '300',
        paddingLeft: '0',
        display: 'inline-block',
        lineHeight: 'initial',
        overflow: 'initial',
    },
    typo_skill: {
        color: 'black',
        fontFamily: 'PT Sans Narrow, sans-serif',
        fontWeight: '300',
        paddingLeft: '6px',
        paddingRight: '6px',
        '&:hover': {
            color: 'white',
        }
    }
}));

function Content(props) {
    const classes = useStyles();

    const skills = ["MERN", "React", "Next.js", "Express.js", "Webpack", 
    "Material-UI", "Now.sh", "C#", "SQL", "Firebase"];

    const proyects = [
        {url: "/", name: "React-Material-UI", description: "Few layouts builded with Material-UI"},
        {url: "/", name: "Boilerplate-React-CSR", description: "Boilerplate to begin proyects with React in CSR architecture"},
        {url: "/", name: "Boilerplate-Nextjs", description: "SSR boilerplate with React and Material-UI integration"},
        {url: "/", name: "Cell-Animation", description: "nicely algorithm about cells movement"},
        {url: "/", name: "CoveControl", description: "Some old c# winforms school proyect"}
    ];

    const skillsMapped = skills.map((skill, i) => 
        <Grid item className={classes.grid_skills} key={i}>
            <Paper className={classes.paper_skills}>
                <Typography noWrap variant={'body1'} className={classes.typo_skill}>{skill}</Typography>
            </Paper>
        </Grid>
    );

    const s1 = '\u25CF'
    const proyectsMapped = proyects.map((proyect, index) => {

        if (props.width !== 'xs' && props.width !== 'sm') {
            return  <Paper className={classes.paper_proyect} key={index}>
                        <Typography noWrap variant={'body2'} className={classes.typo_proyect}>
                            <Link href={proyect.url}><a target="_blank">{props.width !== 'xs' && props.width !== 'sm' ? s1 : ''} {proyect.name}</a></Link>
                        </Typography>
                        <Typography noWrap variant={'body2'} className={classes.typo_proyect}>&nbsp;- {proyect.description}</Typography>
                    </Paper>
        } else {
            return  <React.Fragment key={index}>
                        <Paper className={classes.paper_proyect}>
                            <Typography noWrap variant={'body2'} className={classes.typo_proyect}>
                                <Link href={proyect.url}><a target="_blank">{proyect.name}</a></Link>
                            </Typography>
                        </Paper>
                        <Paper className={classes.paper_proyect} >
                            <Typography noWrap variant={'body2'} className={classes.typo_proyect}>{proyect.description}</Typography>
                        </Paper>
                    </React.Fragment>
        }
    });

    const content = (
        <Fragment>
            {/* Name */}
            <Grid item xs={12}>
                <Paper className={classes.paper_name}>
                    <Typography variant={'h4'} className={classes.typo_name}>EDUARDO HIDALGO</Typography>
                </Paper>
            </Grid>
            {/* Divider */}
            <Grid item className={classes.grid_divider}>
            <Paper className={'divider'}>
                    <Typography noWrap variant={'h6'} className={classes.typo_textdivider + ' textdivider'}>SOFTWARE ENGINEER & FULLSTACK DEVELOPER</Typography>
                </Paper>
            </Grid>
            {/* Job & Role */}
            <Grid item xs={12} className={classes.grid_item + ' gridJob'}>
                <Paper className={classes.paper_job}>
                    <Typography noWrap variant={'body2'} className={classes.typo_text}>MERN Web Developer at @</Typography>
                    <Typography noWrap variant={'body2'} className={classes.typo_text}>
                        <Link href="https://webmarina.now.sh/"><a target="_blank">&nbsp;Marina V&V</a></Link>
                    </Typography>
                </Paper>
            </Grid>
            {/* Portfolio */}
            <Hidden smDown>
                <Grid container className={' gridPortfolio'}>
                    <Grid item xs={3} className={classes.grid_portfolio}>
                        <Paper square className={classes.paper_portfolio}>
                            <div className='bg pt1'></div>
                        </Paper>
                    </Grid>
                    <Grid item xs={3} className={classes.grid_portfolio}>
                        <Paper square className={classes.paper_portfolio}>
                            <div className='bg pt2'></div>
                        </Paper>
                    </Grid>
                </Grid>
            </Hidden>
            {/* Proyects */}
            <Grid container className={classes.grid_proyects + ' gridProyects'} direction="column" justify="flex-start" alignItems="flex-start">
               {proyectsMapped}
            </Grid>
            {/* Skills */}
            <Hidden smDown>
                <Grid container spacing={16} className={'gridSkills'} >
                    { skillsMapped }
                </Grid>
            </Hidden>
            <Hidden mdUp>
                <Grid container spacing={16} className={'gridSkills'}  direction="row" justify="center" alignItems="center">
                    { skillsMapped }
                </Grid>
            </Hidden>
            {/* Contact */}
            <Grid container className={classes.grid_contact + ' gridContact'} direction="column" justify="flex-start" alignItems="flex-start">
                <Paper className={classes.paper_proyect}>
                    <Typography noWrap variant={'body2'} className={classes.typo_proyect}>You can contact me through my email</Typography>
                    <Typography noWrap variant={'body2'} className={classes.typo_proyect}>
                        <Link href="/"><a target="_blank">&nbsp;ingeduardohidalgo@hotmail.com</a></Link>,
                    </Typography>
                    <Typography noWrap variant={'body2'} className={classes.typo_proyect}>&nbsp;consult my profile</Typography>
                    <Typography noWrap variant={'body2'} className={classes.typo_proyect}>
                        <Link href="/"><a target="_blank">&nbsp;LinkedIn</a></Link>,
                    </Typography>
                    <Typography noWrap variant={'body2'} className={classes.typo_proyect}>&nbsp;follow me at</Typography>
                    <Typography noWrap variant={'body2'} className={classes.typo_proyect}>
                        <Link href="/"><a target="_blank">&nbsp;Twitter</a></Link>,
                    </Typography>
                    <Typography noWrap variant={'body2'} className={classes.typo_proyect}>&nbsp;see my proyects in</Typography>
                    <Typography noWrap variant={'body2'} className={classes.typo_proyect}>
                        <Link href="/"><a target="_blank">&nbsp;Github</a></Link>,
                    </Typography>
                    <Typography noWrap variant={'body2'} className={classes.typo_proyect}>&nbsp;and view my Platzi certificates at</Typography>
                    <Typography noWrap variant={'body2'} className={classes.typo_proyect}>
                        <Link href="/"><a target="_blank">&nbsp;Platzi.</a></Link>
                    </Typography>
                </Paper>
            </Grid>
        </Fragment>
    );

    return (
        <div className={classes.root}>
            {/* versión desktop */}
            <Hidden smDown>
                <Grid container spacing={0} className={classes.grid_container}>
                    {content}
                </Grid>
            </Hidden>

            {/* version mobile */}
            <Hidden mdUp>
                <Grid container spacing={24} className={classes.container}
                direction="column" justify="center" alignItems="center">
                    {content}
                </Grid>
            </Hidden>
        </div>
    )
}

export default withWidth()(Content);
