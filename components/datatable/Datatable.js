import React from 'react';
import JsonColumns from './DatatableColumns.json';
import JsonData from './DatatableData.json';
import JsonOptions from './DatatableOptions.json';
import MUIDataTable from "mui-datatables";

function Datatable(props) {

    const columns = JSON.parse(JSON.stringify(JsonColumns));
    const data = props.data;
    const options = JSON.parse(JSON.stringify(JsonOptions));

    // definición de textos en la table
    const textLabels = {
        body: {
            noMatch: "Lo sentimos, no hay coincidencias en su búsqueda",
            toolTip: "Orden",
        },
        pagination: {
            next: "Siguiente",
            previous: "Anterior",
            rowsPerPage: "Columnas por página:",
            displayRows: "de",
        },
        toolbar: {
            search: "Búsqueda",
            downloadCsv: "Descargar CSV",
            print: "Imprimir",
            viewColumns: "Vista Columnas",
            filterTable: "Filtros",
        },
        filter: {
            all: "Todos",
            title: "FILTROS",
            reset: "RESETEAR",
        },
        viewColumns: {
            title: "Mostrar Columnas",
            titleAria: "Mostrar/Ocultar Columnas mostradas",
        },
        selectedRows: {
            text: "Columna(s) seleccionada(s)",
            delete: "Eliminar",
            deleteAria: "Eliminar columnas seleccionadas",
        }
    }

    options['textLabels'] = textLabels;

    return (
        <MUIDataTable
            title={"Lista de Pokemones"}
            columns={columns}
            data={data}
            options={options}
        />
    )
}

export default Datatable;