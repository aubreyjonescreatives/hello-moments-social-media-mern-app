import React from 'react'
import { Box, Typography, useTheme, useMediaQuery, Button } from "@mui/material"; 
import RegisterLoginForm from "../../components/RegisterLoginForm.jsx"; 
import logo from "../../assets/hmlogo.png"; 



const LoginPage = () => {
  const theme = useTheme(); 
  const isNonMobileScreens = useMediaQuery("min-width: 1000px"); 
  return (
    <Box>
      <Box display="flex" width="100%" backgroundColor={theme.palette.background.alt}>
<Box width="90%" p="1rem 6%" textAlign="center" display="flex" justifyContent="center">
  <img src={logo} alt="Hello Moments Logo" height="42px"/>
<Typography
        fontWeight="bold"
        fontSize="32px"
        color="primary"
        >
          Hello Moments
        </Typography>

        </Box>
    <Box display="flex" justifyContent="flex-end">
    <Button fontSize="28px" backgroundColor={theme.palette.background.alt}>SIGN UP</Button>
      <Button fontSize="28px">LOGIN</Button>
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