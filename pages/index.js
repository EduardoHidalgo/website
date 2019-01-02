// realiza una configuración de los estilos de Material UI
import '../src/bootstrap';
// --- Post bootstrap ---
import React, { useState, useEffect } from 'react';
import 'isomorphic-fetch';
import { makeStyles } from '@material-ui/styles';
import ToolbarComponent from '../components/commons/ToolbarComponent';
import { Paper, Typography } from '@material-ui/core';
import Datatable from '../components/datatable/Datatable';

// Para hacer uso de estilos de material ui es necesario "makeStyles", tal cual.
const useStyles = makeStyles(theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
    }
}));

// hook separado del componente que recibe una url de una api y la consume. 
// retorna la data y un flag, contiene código hardcodeado para procesar el array de retorno.
const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    async function FecthAPI() {
        const res = await fetch(url);
        const json = await res.json();
        const pokemons = json.results;

        // codigo hardcodeado para procesar los resultados
        const a = [];
        pokemons.map((pokemon) => (
            a.push([ pokemon.name, pokemon.url])
        ));

        setData(a);
        setLoading(false);
    }

    useEffect(() => {
        FecthAPI();
    }, []);

    return { data, loading };
};

function Index(props) {
    const { data, loading } = useFetch('https://pokeapi.co/api/v2/pokemon/');
    const classes = useStyles();

    console.log(props.database);

    return (
        <div>
            <ToolbarComponent/>
            <Paper className={classes.root} elevation={1} square={false}>
                { loading ? <div>loading...</div> : <Datatable data={data}/>}
            </Paper>
        </div>
    )
}

export default Index;