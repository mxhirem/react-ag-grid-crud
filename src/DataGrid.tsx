import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import { columnDefs } from "./columnDefs";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";


const DataGrid = (props: any) => {
  console.log("grid render");

  const [gridApi, setGridApi] = useState<any>();

  const defaultColDef = {
    width: 150,
    editable: true,
    resizable: true
  }

  const onAddRow = (event: any) => {
    event.preventDefault();
    gridApi.updateRowData({
      add: [{
        rank: '',
        magnitude: '',
        name: '',
        designation: '',
        distance: '',
        spectral: ''
      }]
    });
    props.parentCallback(gridApi);
  }

  const onDeleteRow = (event: any) => {
    event.preventDefault();
    const currentRow = gridApi.getSelectedRows();
    //console.log('onDeleteRow', currentRow)
    gridApi.updateRowData({
      remove: currentRow
    });
    props.parentCallback(gridApi);
  }

  const cellValueChangedHandler = (event: any) => {
    //console.log('cellValueChangedHandler', event.data)
    props.parentCallback(gridApi);
  };

  return (
    <div >
      <div>
        <button onClick={onAddRow}>Add Row</button>
        <button onClick={onDeleteRow}>Delete Row</button>
      </div>
      <div className="Grid ag-theme-balham" style={{ height: '300px', width: '600px' }}>
        <AgGridReact
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          rowData={props.rowData}
          rowSelection="single"
          enableCellChangeFlash={true}
          onCellValueChanged={cellValueChangedHandler}
          onGridReady={params => {
            console.log("grid ready");
            setGridApi(params.api);
          }}
        />
      </div>
      <div>
        <button onClick={onAddRow}>Add Row</button>
        <button onClick={onDeleteRow}>Delete Row</button>
      </div>
    </div>
  );
};

export default DataGrid;