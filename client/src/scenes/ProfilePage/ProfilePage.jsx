import { useEffect, useState} from 'react'; 
import { Box, useMediaQuery } from "@mui/material"; 
import { useSelector } from "react-redux"; 
import { useParams } from "react-router-dom"; 
import NavBar from 'scenes/NavBar/NavBar';
import FriendListWidget from 'scenes/widgets/FriendListWidget';
import ProfileWidget from 'scenes/widgets/ProfileWidget';
import PostsWidget from 'scenes/widgets/PostsWidget';
import CreatePostWidget from 'scenes/widgets/CreatePostWidget';




const ProfilePage = () => {
  const [ user, setUser ] = useState(null); 
  const { userId } = useParams(); 
  const token = useSelector((state) => state.token); 
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)"); 

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

  return (
    <>
    <Box>
       <NavBar />
      <Box
      width="100%"
      padding="2rem 6%"
      display={isNonMobileScreens ? "flex" : "block"}
      gap="2rem"
      justifyContent="center"
      >
        <Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
      <ProfileWidget userId={userId} picturePath={user.picturePath}/>
        <Box m="2rem 0">
        <FriendListWidget userId={userId} />
        </Box>
        </Box>
        <Box flexBasis={isNonMobileScreens ? "42%" : undefined}
        mt={isNonMobileScreens ? undefined : "2rem"}
        >
          <CreatePostWidget picturePath={user.picturePath} />
          <PostsWidget userId={userId} isProfile />
          <Box m="2rem 0">

          </Box>
        </Box>
    
      </Box>
    </Box>
    </>
  )
}; 

export default ProfilePage; 