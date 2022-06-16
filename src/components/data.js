/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect, useMemo } from 'react';
import { DataGrid } from '@material-ui/data-grid';



function DataTable() {
  const [data, setData] = useState();
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.log('ERORR', error));
  }, []);

  const columns = useMemo(
    () => [
      { field: 'userId', headerName: 'Дата', width: 170 },
      { field: 'id', headerName: 'Количество', width: 170 },
      { field: 'title', headerName: 'Название', width: 430 },
      { field: 'completed',headerName: 'Расстояние', width: 330 },
    ],
    [data]
  );

  if (!data) {
    return null;
  }
  return (
    <div style={{ height: '90vh', width: '100%' }}>
      
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={18}
        checkboxSelection
        disableSelectionOnClick
      />
      
    </div>
  );
}
export default DataTable;
