import {
  Box,
  IconButton,
  useTheme,
  Menu,
  MenuItem,
  Typography,
  Avatar,
  Divider,
  ListItemIcon,
  Button,
} from '@mui/material';
import { useContext, useState } from 'react';
import { ColorModeContext, tokens } from '../../theme';
import InputBase from '@mui/material/InputBase';
import {
  LightModeOutlined,
  DarkModeOutlined,
  NotificationsOutlined,
  PersonOutline,
  SearchOutlined,
  PersonAdd,
  Settings,
  Logout,
} from '@mui/icons-material';

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  const [notificationEl, setNotificationEl] = useState(null);
  const openNot = Boolean(notificationEl);
  const handleClickNot = (event) => {
    setNotificationEl(event.currentTarget);
  };
  const handleCloseNot = () => {
    setNotificationEl(null);
  };

  const [settingEl, setSettingEl] = useState(null);
  const openSetting = Boolean(settingEl);
  const handleClickSetting = (event) => {
    setSettingEl(event.currentTarget);
  };
  const handleCloseSetting = () => {
    setSettingEl(null);
  };

  const notifications = [
    { message: 'this is a simple notification', date: '04/07/2025' },
    { message: 'this is a second simple notification', date: '23/03/2025' },
    { message: 'this is a third simple notification', date: '18/05/2025' },
    { message: 'this is a fourth simple notification', date: '10/07/2025' },
  ];
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      p={2}
      position="sticky"
      top={0}
      zIndex={4}
      bgcolor={colors.primary[400]}
    >
      {/* SEARCH BAR */}
      <Box display="flex" bgcolor={colors.primary[400]} borderRadius="3px">
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchOutlined />
        </IconButton>
      </Box>
      {/* ICONS */}
      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === 'dark' ? (
            <DarkModeOutlined />
          ) : (
            <LightModeOutlined />
          )}
        </IconButton>
        <IconButton onClick={handleClickNot}>
          <NotificationsOutlined />
        </IconButton>
        <IconButton onClick={handleClickSetting}>
          <PersonOutline />
        </IconButton>
      </Box>
      <Menu
        id="notification-menu"
        anchorEl={notificationEl}
        open={openNot}
        onClose={handleCloseNot}
        slotProps={{
          list: {
            'aria-labelledby': 'basic-button',
          },
        }}
      >
        {notifications.map((notification) => (
          <Box mx="10px">
            <MenuItem
              onClick={handleCloseNot}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'start',
              }}
            >
              {notification.message}
              <Typography variant="subtitle2" color={colors.greenAccent[500]}>
                {notification.date}
              </Typography>
            </MenuItem>
            <Divider />
          </Box>
        ))}
        <Box mx="10px">
          <Typography
            variant="overline"
            color={colors.blueAccent[500]}
            sx={{ cursor: 'pointer', marginX: '20px' }}
          >
            Show All
          </Typography>
        </Box>
      </Menu>
      <Menu
        anchorEl={settingEl}
        id="account-menu"
        open={openSetting}
        onClose={handleCloseSetting}
        onClick={handleCloseSetting}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&::before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleCloseSetting}>
          <Avatar /> Profile
        </MenuItem>
        <MenuItem onClick={handleCloseSetting}>
          <Avatar /> My account
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleCloseSetting}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem onClick={handleCloseSetting}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleCloseSetting}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </Box>
  );
};
export default Topbar;
