import React, { useEffect, useState, Fragment } from "react";
import Link from 'next/link';
import '../src/bootstrap';
import { makeStyles } from '@material-ui/styles';
import { Paper, Grid, Typography, withWidth } from '@material-ui/core';
import { Hidden } from '@material-ui/core';
import '../src/styles/content.css';

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
        overflow: 'hidden'
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
        fontSize: '2.125rem'
    },
    typo_textdivider: {
        color: 'black',
        fontFamily: 'Oswald, sans-serif',
        paddingLeft: theme.spacing.unit * 1,
        paddingRight: theme.spacing.unit * 1,
        fontSize: '1.25rem'
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
    typo_job: {
        color: 'gray',
        fontFamily: 'PT Sans Narrow, sans-serif',
        fontWeight: '300',
        paddingLeft: '0',
        display: 'inline-block',
        width: '100%',
        lineHeight: '1',
        paddingTop: '20px'
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
    const [job1, setJob1] = useState('none');
    const [job2, setJob2] = useState('none');

    // setters para los estados hover de Jobs
    function Job1(value) { setJob1(value) }
    function Job2(value) { setJob2(value) }

    // protección contra la vulnerabilidad "reverse tabnabbing" que es un ataque de
    // pishing sobre las url's y redirecciones con la propiedad target='_blank'
    function reverseTabnabbingSecurity() {
        if (window) {
            var newWindow = window.open();
            newWindow.opener = null;
        }
    }

    const skills = ["MERN", "React", "Next.js", "Express.js", "Webpack", 
    "Material-UI", "Now.sh", "C#", "SQL", "Firebase"];

    const proyects = [
        {url: "https://github.com/EduardoHidalgo/Personal-Website", name: "Personal-Website", description: "Repo of this awesome personal website!"},
        {url: "https://github.com/EduardoHidalgo/React-Material-UI", name: "React-Material-UI", description: "Few layouts builded with Material-UI"},
        {url: "https://github.com/EduardoHidalgo/Boilerplate-React-CSR", name: "Boilerplate-React-CSR", description: "Boilerplate to begin proyects with React in CSR architecture"},
        {url: "https://github.com/EduardoHidalgo/Boilerplate-Nextjs", name: "Boilerplate-Nextjs", description: "SSR boilerplate with React and Material-UI integration"},
        {url: "https://github.com/EduardoHidalgo/Cell-Animation", name: "Cell-Animation", description: "nicely algorithm about cells movement"},
        {url: "https://github.com/EduardoHidalgo/CoveControl", name: "CoveControl", description: "Some old c# winforms school proyect"}
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
            return  (
                <Paper className={classes.paper_proyect} key={index}>
                    <Typography noWrap variant={'body2'} className={classes.typo_proyect}>
                        <Link href={proyect.url}><a target="_blank">{props.width !== 'xs' && props.width !== 'sm' ? s1 : ''} {proyect.name}</a></Link>
                    </Typography>
                    <Typography noWrap variant={'body2'} className={classes.typo_proyect}>&nbsp;- {proyect.description}</Typography>
                </Paper>
            )
        } else {
            return (
                <React.Fragment key={index}>
                    <Paper className={classes.paper_proyect}>
                        <Typography noWrap variant={'body2'} className={classes.typo_proyect}>
                            <Link href={proyect.url}><a target="_blank">{proyect.name}</a></Link>
                        </Typography>
                    </Paper>
                    <Paper className={classes.paper_proyect} >
                        <Typography noWrap variant={'body2'} className={classes.typo_proyect}>{proyect.description}</Typography>
                    </Paper>
                </React.Fragment>
            )
        }
    });

    const content = (
        <Fragment>
            {/* Name */}
            <Grid item xs={12}>
                <Paper className={classes.paper_name}>
                    <Typography variant={'h1'} className={classes.typo_name}>EDUARDO HIDALGO</Typography>
                </Paper>
            </Grid>
            {/* Divider */}
            <Grid item className={classes.grid_divider}>
            <Paper className={'divider'}>
                    <Typography noWrap variant={'h2'} className={classes.typo_textdivider + ' textdivider'}>SOFTWARE ENGINEER & FULLSTACK DEVELOPER</Typography>
                </Paper>
            </Grid>
            {/* Job & Role */}
            <Grid item xs={12} className={classes.grid_item + ' gridJob'}>
                <Paper className={classes.paper_job}>
                    <Typography noWrap variant={'body2'} className={classes.typo_text}>MERN Web Developer at @</Typography>
                    <Typography noWrap variant={'body2'} className={classes.typo_text}>
                        <Link href="https://webmarina.now.sh/"><a target="_blank" rel="noopener noreferrer" onClick={reverseTabnabbingSecurity()}>&nbsp;Marina V&V</a></Link>
                    </Typography>
                </Paper>
            </Grid>
            {/* Portfolio */}
            <Hidden smDown>
                <Grid container className={' gridPortfolio'}>
                    <Grid item xs={3} className={classes.grid_portfolio}>
                        <a href="https://www.granplan.com/" target="_blank" rel="noopener noreferrer" onClick={reverseTabnabbingSecurity()}>
                            <Paper square className={classes.paper_portfolio}>
                                <div className={'portfolioContainer ' + job1} 
                                onMouseEnter={() => Job1('enter')} onMouseLeave={() => Job1('leave')}>
                                    <div className={'bg pt1'}></div>
                                    <Paper square className={'rol'}>
                                        <Typography noWrap variant={'body2'} align='center' className={classes.typo_job}>Tester Semi-Senior</Typography>
                                        <Typography noWrap variant={'body2'} align='center' className={classes.typo_text + ' jobdate'}>12/01/18 - 15/09/18</Typography>
                                    </Paper>
                                </div>
                            </Paper>
                        </a>
                    </Grid>
                    <Grid item xs={3} className={classes.grid_portfolio}>
                        <a href="https://webmarina.now.sh/" target="_blank" rel="noopener noreferrer" onClick={reverseTabnabbingSecurity()}>
                            <Paper square className={classes.paper_portfolio}>
                            <div className={'portfolioContainer ' + job2} 
                            onMouseEnter={() => Job2('enter')} onMouseLeave={() => Job2('leave')}>
                                <div className={'bg pt2'}></div>
                                    <Paper square className={'rol'}>
                                        <Typography noWrap variant={'body2'} align='center' className={classes.typo_job}>MERN Web dev</Typography>
                                        <Typography noWrap variant={'body2'} align='center' className={classes.typo_text + ' jobdate'}>04/09/18 - Actually</Typography>
                                    </Paper>
                                </div>
                            </Paper>
                        </a>
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
                        <Link href="mailto:ingeduardohidalgo@hotmail.com"><a>&nbsp;ingeduardohidalgo@hotmail.com</a></Link>,
                    </Typography>
                    <Typography noWrap variant={'body2'} className={classes.typo_proyect}>&nbsp;consult my profile</Typography>
                    <Typography noWrap variant={'body2'} className={classes.typo_proyect}>
                        <Link href="https://www.linkedin.com/in/eduardo-hdr/"><a target="_blank" rel="noopener noreferrer" onClick={reverseTabnabbingSecurity()}>&nbsp;LinkedIn</a></Link>,
                    </Typography>
                    <Typography noWrap variant={'body2'} className={classes.typo_proyect}>&nbsp;follow me at</Typography>
                    <Typography noWrap variant={'body2'} className={classes.typo_proyect}>
                        <Link href="https://twitter.com/EduardoHidalgo0"><a target="_blank" rel="noopener noreferrer" onClick={reverseTabnabbingSecurity()}>&nbsp;Twitter</a></Link>,
                    </Typography>
                    <Typography noWrap variant={'body2'} className={classes.typo_proyect}>&nbsp;see my proyects in</Typography>
                    <Typography noWrap variant={'body2'} className={classes.typo_proyect}>
                        <Link href="https://github.com/EduardoHidalgo"><a target="_blank" rel="noopener noreferrer" onClick={reverseTabnabbingSecurity()}>&nbsp;Github</a></Link>,
                    </Typography>
                    <Typography noWrap variant={'body2'} className={classes.typo_proyect}>&nbsp;and view my Platzi certificates at</Typography>
                    <Typography noWrap variant={'body2'} className={classes.typo_proyect}>
                        <Link href="https://platzi.com/@EduardoHidalgo/"><a target="_blank" rel="noopener noreferrer" onClick={reverseTabnabbingSecurity()}>&nbsp;Platzi.</a></Link>
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
