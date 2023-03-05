import React from 'react'
import { Box, Typography, useTheme, useMediaQuery, Button, Link } from "@mui/material"; 
import RegisterLoginForm from "../../components/RegisterLoginForm.jsx"; 
import logo from "../../assets/hmlogo.png"; 
import HelloMoments from "../../assets/hellomomentstextlogo.png"; 




const LoginPage = () => {
  const theme = useTheme(); 
  const isNonMobileScreens = useMediaQuery("min-width: 1000px"); 
  const primaryMain = theme.palette.primary.main; 


  const buttonStyles = {
    color: primaryMain, 
    fontWeight: '800'
  }

  return (
    <Box>
      <Box display="flex" width="100%" backgroundColor={theme.palette.background.alt}>
<Box width="95%" p="1rem 6%" justifyContent="flex-start">
  <img src={logo} alt="Hello Moments Logo" height="42px"/>
<img src={HelloMoments} alt="Hello Moments Logo"/>
  

        </Box>
    <Box display="flex" justifyContent="flex-end" p="1rem 1px">
    <Button fontSize="14px" sx={buttonStyles} paddingRight="5px">SIGN UP</Button>
      <Button fontSize="14px" sx={buttonStyles}>LOGIN</Button>
    </Box>

   
        </Box>

        <Box
        width={isNonMobileScreens ? "50%" : "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}
        >
          <Typography fontWeight="500" varient="h5" sx={{ mb: "1.5rem"}} textAlign="center" fontSize="25px">
            Welcome to Hello Moments
          </Typography>
          <Typography fontWeight="500" varient="h5" sx={{ mb: "1.5rem"}} textAlign="center" fontSize="25px">
            Connect with your loved ones from all over the world.
          </Typography>

        <RegisterLoginForm />

        </Box>
    </Box>
  )
}

export default LoginPage; 