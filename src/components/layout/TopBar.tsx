import {
  AppBar,
  Avatar,
  Box,
  IconButton,
  Menu,
  Toolbar,
  MenuItem,
  useTheme,
  Divider,
  ListItemIcon,
} from '@mui/material';
import { useState } from 'react';
import LogoBlackPNG from '../../assets/images/logo-black.png';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../services/authentication';

type TProps = {
  height?: string; // In px
};

const TopBar = ({ height = '64px' }: TProps) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="fixed" sx={{ height }}>
      <Box sx={{ width: '100%', display: 'flex' }}>
        <Toolbar
          disableGutters
          sx={{
            justifyContent: 'space-between',
            width: '100%',
            pl: 1,
            pr: 1,
          }}
        >
          <Box component="a" href="/">
            <img
              src={LogoBlackPNG}
              alt="Logo"
              loading="lazy"
              style={{ width: '36px' }}
            />
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <IconButton onClick={handleClick} sx={{ p: 0 }}>
              <Avatar
                alt="User avatar"
                sx={{ bgcolor: theme.palette.secondary.light }}
              >
                M
              </Avatar>
            </IconButton>

            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <Divider />
              <MenuItem onClick={() => null}>
                <ListItemIcon>
                  <Settings fontSize="small" />
                </ListItemIcon>
                Settings
              </MenuItem>

              <MenuItem
                onClick={() => {
                  logout();
                  navigate('/', { replace: true });
                }}
              >
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                Log out
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Box>
    </AppBar>
  );
};

export default TopBar;
