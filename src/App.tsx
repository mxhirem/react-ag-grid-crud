import React, { useState } from 'react';
import './App.css';
import DataGrid from "./DataGrid";
import { rowData } from "./rowData";

const App = (props: any) => {

    const [rows, setRows] = useState<any>()

    const callbackFunction = (nodes: any) => {
        const data: any = [];
        nodes.forEachNode((node: any) => data.push(node.data));
        setRows(data)
    }

    const handleSubmit = (event: any) => {
        event.preventDefault();
        console.log('handleSubmit-event', event)
        if (null != rows) {
            console.log('handleSubmit-rows', rows)
        } else {
            console.log('handleSubmit-rowData', rowData)
        }
    }

    return (
        <div className="App">
            <form onSubmit={handleSubmit}>
                <DataGrid parentCallback={callbackFunction} rowData={rowData} />
                <button type="submit">submit</button>
            </form>
        </div>
    );

}

export default App;
