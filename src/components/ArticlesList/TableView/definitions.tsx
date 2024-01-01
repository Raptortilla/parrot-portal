import { GridColDef } from '@mui/x-data-grid';
import EditArticleButton from './Actions/EditArticleButton';

export const columns: GridColDef[] = [
  { field: 'date', headerName: 'Date', width: 150 },
  { field: 'title', headerName: 'Title', width: 150 },
  {
    field: 'actions',
    headerName: 'Actions',
    headerAlign: 'center',
    align: 'center',
    renderCell: (params: any) => {
      const { id } = params;
      return <EditArticleButton articleId={id} />;
    },
  },
];
