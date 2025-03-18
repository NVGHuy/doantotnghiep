
import { Box, colors } from '@mui/material'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { useState } from 'react'
import Divider from '@mui/material/Divider'
import ListItemIcon from '@mui/material/ListItemIcon'
import PersonAdd from '@mui/icons-material/PersonAdd'
import Avatar from '@mui/material/Avatar'
import Tooltip from '@mui/material/Tooltip'
import IconButton from '@mui/material/IconButton'
import SettingsIcon  from '@mui/icons-material/Settings'
import LogoutIcon  from '@mui/icons-material/Logout'

function Profiles() {
  const[anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <Box>
      <Tooltip title="Account settings">
        <IconButton
          onClick={handleClick}
          size="small"
          sx={{ padding: 0 }}
          aria-controls={open ? 'account-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
        >
          <Avatar
            sx={{ width: 36, height: 36 }}
            alt='GiaHuy'
            src='https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-1/449932819_1957019394816619_8636880080737780620_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=103&ccb=1-7&_nc_sid=e99d92&_nc_ohc=guQrIBMURbwQ7kNvgF93TzD&_nc_oc=Adh6GlfRanq0zcGsMi_EBSuzncVp2WzfKkFPxXVwmuI52cM_2PZSKAiPRK_09NdC5pt54uC36YQhzM0hhV3bRfuV&_nc_zt=24&_nc_ht=scontent.fdad3-1.fna&_nc_gid=zRV7vwXWfRaSsKn2QO8UKw&oh=00_AYFcyvdYFuU_R1n8t44L3PyFimo683zt8ZhSc5YdMaA0fw&oe=67DF4ED0'
          />
        </IconButton>
        <Menu
        id="basic-menu-profiles"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button-profiles'
        }}
        >
        <MenuItem >
          <Avatar sx={{ width: 28, height: 28, mr: 2 }} /> Profile
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <SettingsIcon fontSize="small" />
          </ListItemIcon>
          Setting
        </MenuItem>
        <MenuItem sx={{
          '&:hover': {
            color: 'warning.dark',
            '& .logout-icon': {
              color: 'warning.dark'
            }
          }
        }}>
          <ListItemIcon>
            <LogoutIcon className='logout-icon' fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
        </Menu>
      </Tooltip>
    </Box>
  )
}

export default Profiles