import { useState } from "react"; 
import { Box, IconButton, InputBase, Typography, Select, MenuItem, FormControl, useTheme, useMediaQuery, Link} from "@mui/material";
import { Search, Message, DarkMode, LightMode, Notifications, Help, Menu, Close}  from "@mui/icons-material"; 
import {useDispatch, /* useSelector */ } from "react-redux"; 
import {setMode, setLogout} from "state/index.js"; 
import { useNavigate } from "react-router-dom"; 
import FlexBetween from "components/FlexBetween"; 
import HelloMoments from "../../assets/hellomomentstextlogo.png"; 
import logo from "../../assets/hmlogo.png";


const iconBox = {
  display: 'flex', 
  flexDirection: 'column', 
  alignItems: 'center'
}




const NavBar = () => {

const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false); 
const dispatch = useDispatch(); 
const navigate = useNavigate(); 
//const user = useSelector((state) => state.user); 
const isNonMobileScreens = useMediaQuery("(min-width: 1000px)"); 

const theme = useTheme(); 
const neutralLight = theme.palette.neutral.light; 
const dark = theme.palette.neutral.dark; 
const background = theme.palette.background.default; 
const primaryLight = theme.palette.primary.light; 
const alt = theme.palette.background.alt;
//const primaryMain = theme.palette.primary.main;  

const fullName = 'First Last'; 




const navIconStyles = {
  fontSize: '25px', 
  color: {neutralLight}, 
  "&:hover": {
    //  color: primaryLight, 
      cursor: "pointer", 
    }, 
 
}

const navIconStylesType = {
  fontSize: '15px', 
  color: {neutralLight}, 
  textDecoration: 'none', 
  "&:hover": {
  //  color: primaryLight, 
    cursor: "pointer", 
    textDecoration: 'none', 
  }, 
 
}





// `${user.firstName} ${user.lastName}`

  return (
    <FlexBetween padding="1rem 6%" backgroundColor={alt}>
      <FlexBetween gap="1.75rem">
        <Typography
        fontWeight="bold"
        fontSize="clamp(1rem, 2rem, 2.25rem)"
        color="primary"
        onClick={() => navigate("/")}
        sx={{
          "&:hover": {
            color: primaryLight, 
            cursor: "pointer", 
          }, 
        }}
        >
           <img src={logo} alt="Hello Moments Logo" height="42px"/>
          <img src={HelloMoments} alt="Hello Moments Logo"/>
        </Typography>
        {isNonMobileScreens && (
        <FlexBetween backgroundColor={neutralLight} borderRadius="9px" gap="3rem" padding="0.1rem 1.5rem">
          <InputBase placeholder="Search..." />
          <IconButton>
            <Search />
          </IconButton>
          </FlexBetween>
        )}
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
          <Link sx={iconBox}>
          <Message sx={navIconStyles}/>
          <Typography sx={navIconStylesType}>Messages</Typography>
          </Link>
          <Link sx={iconBox}>
          <Notifications sx={navIconStyles} />
          <Typography sx={navIconStylesType}>Notifications</Typography>
    
          </Link>
          <Link sx={iconBox}>
          <Help sx={navIconStyles} />
          <Typography sx={navIconStylesType}>Help</Typography>
          </Link>
          <FormControl variant="standard" value={fullName}>
            <Select
            value={fullName}
            sx={{
              backgroundColor: neutralLight, 
              width: "150px", 
              borderRadius: "0.25rem", 
              p: "0.25rem 1rem", 
              "& .MUISvgIcon-root": {
                pr: "0.25rem", 
                width: "3rem",
              }, 
              "& .MuiSelect-select:focus": {
                backgroundColor: neutralLight
              },
            }}
            input={<InputBase />}
            >
              <MenuItem value={fullName}>
                <Typography>{fullName}</Typography>
              </MenuItem>
               <MenuItem onClick={() => dispatch(setLogout())}>Logout</MenuItem>
            </Select>
          </FormControl>
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
          <IconButton onClick={() => dispatch(setMode())}>
          {theme.palette.mode === "dark" ? (
            <DarkMode sx={{ fontSize: "25px"}} />
          ) : (
            <LightMode sx={{ color: dark, fontSize: "25px"}} />
          )}
          </IconButton>
          <Message sx={{ fontSize: "25px"}} />
          <Notifications sx={{ fontSize: "25px"}} />
          <Help sx={{ fontSize: "25px"}} />
          <FormControl variant="standard" value={fullName}>
            <Select
            value={fullName}
            sx={{
              backgroundColor: neutralLight, 
              width: "150px", 
              borderRadius: "0.25rem", 
              p: "0.25rem 1rem", 
              "& .MUISvgIcon-root": {
                pr: "0.25rem", 
                width: "3rem",
              }, 
              "& .MuiSelect-select:focus": {
                backgroundColor: neutralLight
              }
            }}
            input={<InputBase />}
            >
              <MenuItem value={fullName}>
                <Typography>{fullName}</Typography>
              </MenuItem>
               <MenuItem onClick={() => dispatch(setLogout())}>Logout</MenuItem>
            </Select>
          </FormControl>
    </FlexBetween>

      </Box>
    )}
    </FlexBetween>
  ); 
}; 

export default NavBar; 