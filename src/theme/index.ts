import { createTheme } from '@mui/material';
import { primary, secondary } from './Colors';

const theme = createTheme({
  palette: {
    primary,
    secondary,
  },
  typography: {
    fontFamily: 'IBM Plex Sans',
  },
});

export default theme;
