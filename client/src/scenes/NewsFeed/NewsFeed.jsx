import { Box, useMediaQuery } from "@mui/material"; 
import { useSelector } from "react-redux"; 
import NavBar from "../NavBar/NavBar.jsx"; 
import ProfileWidget from "../widgets/ProfileWidget.jsx"; 
import CreatePostWidget from "../widgets/CreatePostWidget.jsx"; 
import PostsWidget from "scenes/widgets/PostsWidget.jsx";
import AdvertWidget from "scenes/widgets/AdvertWidget.jsx";
import FriendListWidget from "scenes/widgets/FriendListWidget.jsx";

const NewsFeed = () => {


  const isNonMobileScreens = useMediaQuery("(min-width:1000px)"); 
  const { _id, picturePath } = useSelector((state) => state.user); 



  return (
    <>
    <Box>
      <NavBar />
      <Box
      width="100%"
      padding="2rem 6%"
      display={isNonMobileScreens ? "flex" : "block"}
      gap="0.5rem"
      justifyContent="space-between"
      >
        <Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
      <ProfileWidget userId={_id} picturePath={picturePath}/>

        </Box>
        <Box flexBasis={isNonMobileScreens ? "42%" : undefined}
        mt={isNonMobileScreens ? undefined : "2rem"}
        >
          <CreatePostWidget picturePath={picturePath} />
          <PostsWidget userId={_id} />

        </Box>
        {isNonMobileScreens && (
          <Box flexBasis="26%">
            <AdvertWidget />
            <Box m="2rem 0">
              <FriendListWidget userId={_id} />
            </Box>
          </Box>
        )}

      </Box>
    </Box>
  
    </>

  ); 
}; 

export default NewsFeed;