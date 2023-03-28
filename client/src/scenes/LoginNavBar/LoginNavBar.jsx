import React from 'react'
import { Box, useTheme, Button, } from "@mui/material"; 
//import RegisterLoginForm from "../../components/RegisterLoginForm.jsx"; 
import HelloMomentsLogo from "../../assets/hmlogo50px.png"; 
//import { Navigate } from "react-router-dom"; 



const LoginNavBar = () => {
  const theme = useTheme(); 
 // const isNonMobileScreens = useMediaQuery("min-width: 1000px"); 
  const primaryMain = theme.palette.primary.main; 


  const buttonStyles = {
    backgroundColor: theme.palette.secondary.main, 
    color: theme.palette.neutral.light,
    fontWeight: '800', 
    width: '100px', 
    margin: '12px', 
    "&:hover": {
        color: theme.palette.neutral.light,
        border: primaryMain,  
        backgroundColor: theme.palette.secondary2.main,
        cursor: "pointer", 
      }, 
  }

  return (
    <Box>
      <Box display="flex" width="100%" backgroundColor={theme.palette.background.alt}>
<Box width="95%" p="1rem 6%" justifyContent="flex-start">
<Button href="/"><img src={HelloMomentsLogo} alt="Hello Moments Logo"/></Button>
  

        </Box>
    <Box display="flex" justifyContent="flex-end" p="1rem 1px">
   <Button href="/login" fontSize="14px" sx={buttonStyles}>LOGIN</Button>
    </Box>

   
        </Box>


    </Box>
  )
}

export default LoginNavBar; 