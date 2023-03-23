import { useState } from "react"; 
import { Box, IconButton, InputBase, Typography, Select, MenuItem, FormControl, useTheme, useMediaQuery, Link, Avatar} from "@mui/material";
import { Search, Message, DarkMode, LightMode, Notifications, Menu, Close}  from "@mui/icons-material"; 
import LogoutIcon from '@mui/icons-material/Logout';
import {useDispatch, useSelector } from "react-redux"; 
import {setMode, setLogout} from "state/index.js"; 
import { useNavigate } from "react-router-dom"; 
import FlexBetween from "components/FlexBetween"; 
import HelloMoments from "../../assets/hellomomentstextlogo.png"; 
import logo from "../../assets/hmlogo.png";
import UserImage from "components/UserImage";

const iconBox = {
  display: 'flex', 
  flexDirection: 'column', 
  alignItems: 'center'
}

const iconBoxSmall = {
  display: 'flex', 
  flexDirection: 'row', 
  alignItems: 'center'
}




const NavBar = ( { image, size="60px" }) => {

const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false); 
const dispatch = useDispatch(); 
const navigate = useNavigate(); 
const user = useSelector((state) => state.user); 
const isNonMobileScreens = useMediaQuery("(min-width: 1000px)"); 

const theme = useTheme(); 
const neutralLight = theme.palette.neutral.light; 
const dark = theme.palette.neutral.dark; 
const background = theme.palette.background.default; 
const secondaryMain = theme.palette.secondary.main; 
const alt = theme.palette.background.alt;
//const primaryMain = theme.palette.primary.main;  

const fullName = `${user.firstName} ${user.lastName}`; 





const navIconStyles = {
  fontSize: '25px', 
  color: {secondaryMain}, 
  "&:hover": {
    //  color: primaryLight, 
      cursor: "pointer", 
    }, 
 
};

const navIconStylesType = {
  fontSize: '15px', 
  color: {secondaryMain}, 
  textDecoration: 'none', 
  "&:hover": {
  //  color: primaryLight, 
    cursor: "pointer", 
    textDecoration: 'none', 
  }, 
 
};





// `${user.firstName} ${user.lastName}`

  return (
    <FlexBetween padding="1rem 6%" backgroundColor={alt}>
      <FlexBetween gap="1.75rem">
        <Typography
        fontWeight="bold"
        fontSize="clamp(1rem, 2rem, 2.25rem)"
        color="primary"
        onClick={() => navigate("/feed")}
        sx={{
          "&:hover": {
            color: secondaryMain, 
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
          <Link sx={iconBox}>
          <Notifications sx={navIconStyles} />
          <Typography sx={navIconStylesType}>Notifications</Typography>
    
          </Link>
            <FlexBetween>
          <Link sx={iconBox}>
          <Avatar src={`http://localhost:3001/assets/${image}`} alt="user" sx={navIconStyles}/>
          <Typography sx={navIconStylesType}>Hi, {fullName} </Typography>
    
          </Link>
          </FlexBetween>

          <Link sx={iconBox}>
          <LogoutIcon sx={navIconStyles} />
          <Typography sx={navIconStylesType} onClick={() => dispatch(setLogout())}>Logout </Typography>
    
          </Link>

    </FlexBetween>
    ) : (
    <IconButton
    onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
    >
      <Menu />
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
          <Avatar src={`http://localhost:3001/assets/${image}`} alt="user" />
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