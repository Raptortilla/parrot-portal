import { DataGrid, GridRowsProp } from '@mui/x-data-grid';
import { columns } from './definitions';

const rows: GridRowsProp = [
  { id: 1, date: 'Hello', title: 'World' },
  { id: 2, date: 'DataGridPro', title: 'is Awesome' },
  { id: 3, date: 'MUI', title: 'is Amazing' },
  { id: 4, date: 'Hello', title: 'World' },
  { id: 5, date: 'DataGridPro', title: 'is Awesome' },
  { id: 6, date: 'MUI', title: 'is Amazing' },
  { id: 7, date: 'Hello', title: 'World' },
  { id: 8, date: 'DataGridPro', title: 'is Awesome' },
  { id: 9, date: 'MUI', title: 'is Amazing' },
  { id: 10, date: 'Hello', title: 'World' },
  { id: 12, date: 'DataGridPro', title: 'is Awesome' },
  { id: 13, date: 'MUI', title: 'is Amazing' },
];

const TableView = () => {
  return (
    <div style={{ height: 450, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} disableRowSelectionOnClick />
    </div>
  );
};

export default TableView;
