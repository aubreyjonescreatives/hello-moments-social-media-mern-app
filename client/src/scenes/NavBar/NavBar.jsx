import { useState, useEffect } from "react"; 
import {useDispatch, useSelector } from "react-redux"; 
import { useParams } from "react-router-dom";
import UserImage from "../../components/UserImage";
import { Box, IconButton, Typography, Menu, MenuItem, ListItemIcon, Tooltip, useTheme, useMediaQuery, Link, Avatar, Divider} from "@mui/material";
import { Message, DarkMode, LightMode, Notifications, PersonAdd, Settings, Close, Logout}  from "@mui/icons-material"; 
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout'; 
import {setMode, setLogout} from "state/index.js"; 
import { useNavigate } from "react-router-dom"; 
import FlexBetween from "components/FlexBetween"; 
import HelloMoments from "../../assets/hellomomentstextlogo.png"; 
import logo from "../../assets/hmlogo.png";
import NotificationsWidget from "../MomentNotifications/MomentNotifications"; 
import FriendListWidget from 'scenes/widgets/FriendListWidget';
import ProfileWidget from 'scenes/widgets/ProfileWidget';
import PostsWidget from 'scenes/widgets/PostsWidget';
import CreatePostWidget from 'scenes/widgets/CreatePostWidget';






const NavBar = () => {
  
  
  const [ user, setUser ] = useState(null);
 // const { userId } = useParams(); 
  const token = useSelector((state) => state.token); 
  const dispatch = useDispatch(); 
  const navigate = useNavigate(); 


  // RWD
  
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)"); 

  // theme variables

const theme = useTheme(); 
const background = theme.palette.background.default; 
const secondaryMain = theme.palette.secondary.main; 
const secondary2Main = theme.palette.secondary2.main; 
const alt = theme.palette.background.alt;
//const primaryMain = theme.palette.primary.main; 


  
const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false); 
const [ anchorEl, setAnchorEl] = useState(null); 


// retrieve user info from database 
const userInfo = useSelector((state) => state.user);

const fullName = `${userInfo.firstName} ${userInfo.lastName}`; 

const userProfileImage = `${userInfo.picturePath}`


const userId = `${userInfo._id}`
console.log(userId)


const open = Boolean(anchorEl); 
 


const getUser = async () => {
  const response = await fetch(`http://localhost:3001/users/${userId}`, {
    method: "GET",
    headers: { Authorization: `Bearer ${token}`},
  });
  const data = await response.json(); 
  setUser(data); 
}; 

useEffect(() => {
  getUser(); 
}, []); // eslint-disable-line react-hooks/exhaustive-deps

if (!user) return null; 




const handleClick = (event) => {
  setAnchorEl(event.currentTarget); 
}; 

const handleClose = () => {
  setAnchorEl(null); 
}; 



// media query RWD









const iconBox = {
  display: 'flex', 
  flexDirection: 'column', 
  alignItems: 'center',
  textDecoration: 'none', 
  color: `${secondaryMain}`, 
  "&:hover": {
    color: `${secondary2Main}`, 
      cursor: "pointer", 
    }, 
 
}


const iconBoxSmall = {
  display: 'flex', 
  flexDirection: 'row', 
  alignItems: 'center', 
  color: `${secondaryMain}`, 
  textDecoration: 'none', 
  "&:hover": {
    color: `${secondary2Main}`, 
      cursor: "pointer", 
    },
}






const navIconStyles = {
  fontSize: '25px', 
 
  
  
};

const navIconStylesType = {
  fontSize: '15px', 

 
 
 
};


const navIconStylesAvatar = {
  width: '25px', 
  height: '25px', 
  fontSize: '20px', 
  color: {secondary2Main}, 
  textDecoration: 'none', 
  "&:hover": {
    //  color: primaryLight, 
      cursor: "pointer", 
    }, 
 
};





// `${user.firstName} ${user.lastName}`

  return (
    <FlexBetween padding="1rem 6%" backgroundColor={alt}>
      <FlexBetween gap="1.75rem">
        <Typography
        fontWeight="bold"
        fontSize="clamp(1rem, 2rem, 2.25rem)"
        onClick={() => navigate("/feed")}
        sx={{
          "&:hover": { 
            cursor: "pointer", 
          }, 
        }}
        >
           <img src={logo} alt="Hello Moments Logo" height="42px"/>
          <img src={HelloMoments} alt="Hello Moments Logo"/>
        </Typography>
       
    </FlexBetween>


    {/* Desktop NAV */}
    {isNonMobileScreens ? (
    <FlexBetween gap="2rem">
          <Link sx={iconBox} onClick={() => dispatch(setMode())}>
         {theme.palette.mode === "dark" ? (
            <DarkMode sx={navIconStyles} />
          ) : (
            <LightMode sx={navIconStyles}/>
          )}
          <Typography sx={navIconStylesType}>Mode</Typography>
          </Link>
          <Link sx={iconBox} onClick={() => navigate("/messages")}>
          <Message sx={navIconStyles}/>
          <Typography sx={navIconStylesType}>Messages</Typography>
          </Link>


            {/* Notifications */}

    
           
          <Link sx={iconBox} onClick={() => navigate("/notifications")}>
          <Notifications sx={navIconStyles} />
          <Typography sx={navIconStylesType}>Notifications</Typography>
    
          </Link>


           
 {/* End Notifications */}




           
           {/* User Account Dropdown */}
           
            <IconButton
            onClick={handleClick}
            size="small"
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            
            >
            <FlexBetween>
          <Link sx={iconBox}>
            
          <Avatar  sx={navIconStylesAvatar} alt="user"> <UserImage image={userProfileImage} /> </Avatar>
          <Typography sx={navIconStylesType}>Hi, {fullName} </Typography>
          </Link>
          </FlexBetween>
            </IconButton>
      

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
        <MenuItem onClick={() => navigate(`/profile/${userId}`)}>
        <Avatar  sx={navIconStylesAvatar} alt="user"> <UserImage image={userProfileImage} /> </Avatar>
          <Typography sx={navIconStylesType}>Hi, {fullName} </Typography>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={() => dispatch(setLogout())}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
           
 {/* End User Account Dropdown */}


    </FlexBetween>
    ) : (
    <IconButton
    onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
    >
      <MenuIcon />
    </IconButton>
    )}
    {/* MOBILE NAVBAR */}
    {!isNonMobileScreens && isMobileMenuToggled && (
      <Box
      position="fixed"
      right="0"
      bottom="0"
      height="100%"
      zIndex="10"
      maxWidth="500px"
      minWidth="300px"
      backgroundColor={background}
      >
        {/* CLOSE ICON */}
        <Box display="flex" justifyContent="flex-end" p="1 rem">
          <IconButton
          onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
          >
            <Close />
          </IconButton>
        </Box>

        {/* MENU ITEMS */}

        <FlexBetween display="flex" flexDirection="column" justifyContent="center" alignItems="center" gap="3rem">
          <FlexBetween>
          <Link sx={iconBoxSmall} onClick={() => dispatch(setMode())}>
         {theme.palette.mode === "dark" ? (
            <DarkMode sx={navIconStyles} />
          ) : (
            <LightMode sx={navIconStyles}/>
          )}
          <Typography sx={navIconStylesType}>Mode</Typography>
          </Link>
          </FlexBetween>
          <FlexBetween>
          <Link sx={iconBoxSmall} onClick={() => navigate("/messages")}>
          <Message sx={{ fontSize: "25px"}} />
          <Typography sx={navIconStylesType}>Messages</Typography>
          </Link>
          </FlexBetween>
          <FlexBetween>
          <Link sx={iconBoxSmall}>
          <Notifications sx={{ fontSize: "25px"}} />
          <Typography sx={navIconStylesType}>Notifications</Typography>
          </Link>
          </FlexBetween>
          <FlexBetween>
          <Link sx={iconBoxSmall}>
          <Avatar  sx={navIconStylesAvatar} alt="user"> <UserImage image={userProfileImage} /> </Avatar>
          <Typography sx={navIconStylesType}>{fullName} </Typography>
    
          </Link>
          </FlexBetween>

          <Link sx={iconBoxSmall}>
          <LogoutIcon />
          <Typography sx={navIconStylesType} onClick={() => dispatch(setLogout())}>Logout </Typography>
    
          </Link>
    </FlexBetween>

      </Box>
    )}
    </FlexBetween>
  ); 
}; 

export default NavBar; 