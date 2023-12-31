import { ReactNode } from 'react';
import { Box, IconButton, Tooltip } from '@mui/material';

type TProps = {
  icon: ReactNode;
  onClick: () => void;
  tooltip?: string;
  containerStyles?: Record<string, any>;
};

const SideBarButton = ({ containerStyles, icon, onClick, tooltip }: TProps) => {
  return (
    <Box sx={{ ...containerStyles }}>
      <Tooltip
        title={tooltip}
        placement="right-end"
        disableHoverListener={!tooltip}
      >
        <IconButton
          aria-label="toggle password visibility"
          onClick={onClick}
          edge="start"
          size="small"
        >
          {icon}
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default SideBarButton;
