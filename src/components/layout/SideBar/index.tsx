import { Box, Paper } from '@mui/material';
import ArticleIcon from '@mui/icons-material/Article';
import HelpIcon from '@mui/icons-material/Help';
import SideBarButton from './SideBarButton';

type TProps = {
  topBarHeight: string;
};

const SideBar = ({ topBarHeight }: TProps) => {
  return (
    <Box>
      <Paper
        elevation={3}
        sx={{
          width: '54px',
          height: `calc(100vh - ${topBarHeight})`,
          pt: '64px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '100%',
          }}
        >
          {/* Upper buttons */}
          <Box sx={{ pt: 2 }}>
            <SideBarButton
              tooltip="See articles"
              icon={<ArticleIcon />}
              containerStyles={{ mb: 1 }}
              onClick={() => null}
            />
          </Box>

          {/* Lower buttons */}
          <Box sx={{ pb: 2 }}>
            <SideBarButton
              tooltip="Help"
              icon={<HelpIcon />}
              containerStyles={{ mt: 1 }}
              onClick={() => null}
            />
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default SideBar;
