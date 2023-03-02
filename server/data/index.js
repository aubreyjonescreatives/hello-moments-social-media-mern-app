import mongoose from "mongoose"; 

const userIds = [

new mongoose.Types.ObjectId(), 
new mongoose.Types.ObjectId(), 
new mongoose.Types.ObjectId(), 
new mongoose.Types.ObjectId(), 
new mongoose.Types.ObjectId(), 
new mongoose.Types.ObjectId(), 
new mongoose.Types.ObjectId(), 
new mongoose.Types.ObjectId(), 




]; 

export const users = [
    {
        _id: userIds[0], 
        firstName: "test", 
        lastName: "me", 
        email: "aaaaaaa@gmail.com", 
        password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy", 
        picturePath: "p11.jpeg", 
        friends: [], 
        location: "San Fran, CA", 
        occupation: "Software Engineer", 
        viewedProfile: 14561, 
        impressions: 888822, 
        createdAt: 1115211422, 
        updatedAt: 1115211422,
        __v: 0,
    }, 
    {
        _id: userIds[1], 
        firstName: "Steve", 
        lastName: "Ralph", 
        email: "thataaa@gmail.com", 
        password: "$!FEAS@!O)_IDJda//G9JxQ4bQ8KSf4OAIe/X/AK9skyWUy", 
        picturePath: "p3.jpeg", 
        friends: [], 
        location: "New York, CA", 
        occupation: "Degenerate", 
        viewedProfile: 12351, 
        impressions: 55555, 
        createdAt: 1595589072, 
        updatedAt: 1595589072,
        __v: 0, 
    }, 
    {
        _id: userIds[2], 
        firstName: "Some", 
        lastName: "Guy", 
        email: "someguy@gmail.com", 
        password: "da39a3ee5e6b4b0d3255bfef95601890afd80709", 
        picturePath: "p4.jpeg", 
        friends: [], 
        location: "Canada, CA", 
        occupation: "Data Scientist Hacker", 
        viewedProfile: 45468, 
        impressions: 19986, 
        createdAt: 1288090662, 
        updatedAt: 1288090662,
        __v: 0, 
    }, 
]