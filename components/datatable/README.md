
# MUI-Datatables - Datatables con Material-UI

Github -> https://github.com/gregnb/mui-datatables

Roadmap de los desarrolladores -> https://github.com/gregnb/mui-datatables/projects/1

<div align="center">
	<img src="https://user-images.githubusercontent.com/19170080/38026128-eac9d506-3258-11e8-92a7-b0d06e5faa82.gif" />
</div>

## Instalación

`npm install mui-datatables --save`

## Demo

[![Edit react-to-print](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/wy2rl1nyzl)

## Uso

Para hacer uso de MUIDataTable es necesario pasarle al componente 3 props:

- columns (nombres de las columnas)
- data (rows con la información)
- options (configuración del table)

Tabla Simple:

```js
import MUIDataTable from "mui-datatables";

const columns = ["Name", "Company", "City", "State"];

const data = [
 ["Joe James", "Test Corp", "Yonkers", "NY"],
 ["John Walsh", "Test Corp", "Hartford", "CT"],
 ["Bob Herm", "Test Corp", "Tampa", "FL"],
 ["James Houston", "Test Corp", "Dallas", "TX"],
];

const options = {
  filterType: 'checkbox',
};

<MUIDataTable
  title={"Employee List"}
  columns={columns}
  data={data}
  options={options}
/>
```

## API


#### &lt;MUIDataTable />

The component accepts the following props:

|Name|Type|Description
|:--:|:-----|:-----|
|**`title`**|array|Title used to caption table
|**`columns`**|array|Columns used to describe table. Must be either an array of simple strings or objects describing a column
|**`data`**|array|Data used to describe table. Must be an array of strings or numbers
|**`options`**|object|Options used to describe table

#### Options:
|Name|Type|Default|Description
|:--:|:-----|:--|:-----|
|**`page`**|number||User provided starting page for pagination
|**`count`**|number||User provided override for total number of rows
|**`serverSide`**|boolean|false|Enable remote data source
|**`filterList`**|array||User provided filter list
|**`rowsSelected`**|array||User provided selected rows
|**`filterType `**|string|'dropdown'|Choice of filtering view. Options are "checkbox", "dropdown", or "multiselect"
|**`textLabels `**|object||User provided labels to localize text
|**`pagination`**|boolean|true|Enable/disable pagination
|**`selectableRows`**|boolean|true|Enable/disable row selection
|**`resizableColumns`**|boolean|false|Enable/disable resizable columns
|**`customToolbar`**|function||Render a custom toolbar
|**`customToolbarSelect`**|function||Render a custom selected rows toolbar. `function(selectedRows, displayData, setSelectedRows) => void`
|**`customFooter`**|function||Render a custom table footer. `function(count, page, rowsPerPage, changeRowsPerPage, changePage) => string`&#124;` React Component`
|**`customSort`**|function||Override default sorting with custom function. `function(data: array, colIndex: number, order: string) => array`
|**`caseSensitive `**|boolean|false|Enable/disable case sensitivity for search
|**`responsive`**|string|'stacked'|Enable/disable responsive table views. Options: 'stacked', 'scroll'
|**`rowsPerPage`**|number|10|Number of rows allowed per page
|**`rowsPerPageOptions`**|array|[10,15,20]|Options to provide in pagination for number of rows a user can select
|**`rowHover`**|boolean|true|Enable/disable hover style over rows
|**`fixedHeader`**|boolean|true|Enable/disable fixed header columns
|**`sortFilterList`**|boolean|true|Enable/disable alphanumeric sorting of filter lists
|**`sort`**|boolean|true|Enable/disable sort on all columns
|**`filter`**|boolean|true|Show/hide filter icon from toolbar
|**`search`**|boolean|true|Show/hide search icon from toolbar
|**`print`**|boolean|true|Show/hide print	 icon from toolbar
|**`download`**|boolean|true|Show/hide download icon from toolbar
|**`downloadOptions`**|object||Options to change the output of the CSV file. Default options: `{filename: 'tableDownload.csv', separator: ','}`
|**`viewColumns`**|boolean|true|Show/hide viewColumns icon from toolbar
|**`onRowsSelect`**|function||Callback function that triggers when row(s) are selected. `function(currentRowsSelected: array, allRowsSelected: array) => void`
|**`onRowsDelete`**|function||Callback function that triggers when row(s) are deleted. `function(rowsDeleted: array) => void`
|**`onRowClick`**|function||Callback function that triggers when a row is clicked. `function(rowData: string[], rowMeta: { dataIndex: number, rowIndex: number }) => void`
|**`onCellClick`**|function||Callback function that triggers when a cell is clicked. `function(colData: any, cellMeta: { colIndex: number, rowIndex: number }) => void`
|**`onChangePage`**|function||Callback function that triggers when a page has changed. `function(currentPage: number) => void`
|**`onChangeRowsPerPage`**|function||Callback function that triggers when the number of rows per page has changed. `function(numberOfRows: number) => void`
|**`onSearchChange`**|function||Callback function that triggers when the search text value has changed. `function(searchText: string) => void`
|**`onSearchOpen`**|function||Callback function that triggers when the searchbox opens. `function() => void`
|**`onFilterChange`**|function||Callback function that triggers when filters have changed. `function(changedColumn: string, filterList: array) => void`
|**`onColumnSortChange`**|function||Callback function that triggers when a column has been sorted. `function(changedColumn: string, direction: string) => void`
|**`onColumnViewChange`**|function||Callback function that triggers when a column view has been changed. `function(changedColumn: string, action: string) => void`
|**`onTableChange`**|function||Callback function that triggers when table state has changed. `function(action: string, tableState: object) => void`

## Customize Columns

On each column object, you have the ability to customize columns to your liking with the 'options' property. Example:

```js
const columns = [
 {
  name: "Name",
  options: {
   filter: true,
   sort: false
  }
 },
 ...
];
```

#### Column:
|Name|Type|Description
|:--:|:-----|:-----|
|**`Name`**|string|Name of column (This field is required)
|**`options`**|object|Options for customizing column


#### Column Options:
|Name|Type|Default|Description
|:--:|:-----|:--|:-----|
|**`display`**|string|'true'|Display column in table. `enum('true', 'false', 'excluded')`
|**`filter`**|boolean|true|Display column in filter list
|**`sort`**|boolean|true|Enable/disable sorting on column
|**`download`**|boolean|true|Display column in CSV download file
|**`customHeadRender`**|function||Function that returns a string or React component. Used as display for column header. `function(value, tableMeta, updateValue) => string`&#124;`
|**`customBodyRender`**|function||Function that returns a string or React component. Used as display data within all table cells of a given column. `function(value, tableMeta, updateValue) => string`&#124;` React Component` [Example](https://github.com/gregnb/mui-datatables/blob/master/examples/component/index.js)

`customHeadRender` is called with these arguments:

```js
function(columnMeta: {
  display: enum('true', 'false', 'excluded'),
  filter: bool,
  sort: bool,
  sortDirection: bool,
}, updateDirection: function)
```


`customBodyRender` is called with these arguments:

```js
function(value: any, tableMeta: {
  rowIndex: number,
  columnIndex: number,
  columnData: array, // Columns Options object
  rowData: array, // Full row data
  tableData: array, Full table data
  tableState: {
    announceText: null|string,
    page: number,
    rowsPerPage: number,
    filterList: array,
    selectedRows: {
      data: array,
      lookup: object,
    },
    showResponsive: boolean,
    searchText: null|string,
  },
}, updateValue: function)
```

## Customize Styling

Using Material-UI theme overrides will allow you to customize styling to your liking. First, determine which component you would want to target and then lookup the override classname. Let's start with a simple example where we will change the background color of a body cell to be red:

```js
import React from "react";
import MUIDataTable from "mui-datatables";
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

class BodyCellExample extends React.Component {

  getMuiTheme = () => createMuiTheme({
    overrides: {
      MUIDataTableBodyCell: {
        root: {
          backgroundColor: "#FF0000"
        }
      }
    }
  })

  render() {

    return (
      <MuiThemeProvider theme={this.getMuiTheme()}>
        <MUIDataTable title={"ACME Employee list"} data={data} columns={columns} options={options} />
      </MuiThemeProvider>
    );

  }
}

```

## Remote Data

If you are looking to work with remote data sets or handle pagination, filtering, and sorting on a remote server you can do that with the following options:

```js
const options = {
  serverSide: true,
  onTableChange: (action, tableState) => {
    this.xhrRequest('my.api.com/tableData', result => {
      this.setState({ data: result });
    });
  }
};
```

To see an example **[Click Here](https://github.com/gregnb/mui-datatables/blob/master/examples/serverside-pagination/index.js)**

## Localization

This package decided that the cost of bringing in another library to perform localizations would be too expensive. Instead the ability to override all text labels (which aren't many) is offered through the options property `textLabels`.  The available strings:

```js
const options = {
  ...
  textLabels: {
    body: {
      noMatch: "Sorry, no matching records found",
      toolTip: "Sort",
    },
    pagination: {
      next: "Next Page",
      previous: "Previous Page",
      rowsPerPage: "Rows per page:",
      displayRows: "of",
    },
    toolbar: {
      search: "Search",
      downloadCsv: "Download CSV",
      print: "Print",
      viewColumns: "View Columns",
      filterTable: "Filter Table",
    },
    filter: {
      all: "All",
      title: "FILTERS",
      reset: "RESET",
    },
    viewColumns: {
      title: "Show Columns",
      titleAria: "Show/Hide Table Columns",
    },
    selectedRows: {
      text: "rows(s) selected",
      delete: "Delete",
      deleteAria: "Delete Selected Rows",
    },
  }
  ...
}
```