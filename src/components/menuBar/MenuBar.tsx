import { useState } from 'react'
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Tooltip,
} from '@mui/material'
import {
  Logout,
  Menu as MenuIcon,
  Settings,
  WhatsApp,
} from '@mui/icons-material'

export default function MenuBar() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Box>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip title="Menu">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <MenuIcon sx={{ color: '#001BA1' }} />
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
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
            '&:before': {
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
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem sx={{ color: '#001BA1' }} onClick={handleClose}>
          <Avatar sx={{ backgroundColor: '#001BA1' }} /> Profile
        </MenuItem>

        <MenuItem sx={{ color: '#001BA1' }} onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" sx={{ color: '#001BA1' }} />
          </ListItemIcon>
          Settings
        </MenuItem>

        <a
          href="https://api.whatsapp.com/send?phone=+5551989889898&text=Olá"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'none' }}
        >
          <MenuItem sx={{ color: '#001BA1' }} onClick={handleClose}>
            <ListItemIcon>
              <WhatsApp fontSize="small" sx={{ color: '#001BA1' }} />
            </ListItemIcon>
            Contato
          </MenuItem>
        </a>

        <Divider />
        <MenuItem sx={{ color: '#001BA1' }} onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" sx={{ color: '#001BA1' }} />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </Box>
  )
}
