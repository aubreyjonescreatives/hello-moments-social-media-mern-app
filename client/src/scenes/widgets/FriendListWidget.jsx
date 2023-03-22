import { useEffect} from 'react'; 
import { useDispatch, useSelector } from "react-redux"; 
import { Box, Typography, useTheme } from '@mui/material'; 
import WidgetWrapper from 'components/WidgetWrapper';
import Friend from 'components/Friend';
import { setFriends } from "state";





const FriendListWidget = ( { userId }) => {
    const dispatch = useDispatch(); 
    const theme = useTheme(); 
   const token = useSelector((state) => state.token); 
    const friends = useSelector((state) => state.user.friends); 

const getFriends = async () => {
    const response = await fetch(
        `http://localhost:3001/users/${userId}/friends`, {
            method: "GET", 
            headers: { Authorization: `Bearer ${token}`}
        }
    )
    const data = await response.json(); 
    dispatch(setFriends({ friends: data})); 
}; 

useEffect(() => {
    getFriends(); 
}, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <WidgetWrapper>
        <Typography
        color={theme.palette.neutral.dark}
        variant="h5"
        fontWeight="500"
        sx={{ mb: "1.5"}}
        >
            Friend List
        </Typography>
        <Box display="flex" flexDirection="column" gap="1.5rem">
            {friends.map((friend) => (
                <Friend 
                key={friend._id}
                name={`${friend.firstName} ${friend.lastName}`}
                subtitle={friend.occupation}
                userPicturePath={friend.picturePath}
                />
            ))}
        </Box>
    </WidgetWrapper>
  )
}

export default FriendListWidget