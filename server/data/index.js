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
        firstName: "Clark", 
        lastName: "Kent", 
        email: "ckent@gmail.com", 
        password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy", 
        picturePath: "smallville.png", 
        friends: [], 
        location: "Metropolis, KS", 
        occupation: "Journalist", 
        viewedProfile: 14561, 
        impressions: 888822, 
        createdAt: 1115211422, 
        updatedAt: 1115211422,
        __v: 0,
    }, 
    {
        _id: userIds[1], 
        firstName: "Elizabeth", 
        lastName: "Wong", 
        email: "ewong@gmail.com", 
        password: "$!FEAS@!O)_IDJda//G9JxQ4bQ8KSf4OAIe/X/AK9skyWUy", 
        picturePath: "kungfuartist.png", 
        friends: [], 
        location: "Secret Nation, SC", 
        occupation: "Kung Fu Artist", 
        viewedProfile: 12351, 
        impressions: 55555, 
        createdAt: 1595589072, 
        updatedAt: 1595589072,
        __v: 0, 
    }, 
    {
        _id: userIds[2], 
        firstName: "Indiana", 
        lastName: "Jones", 
        email: "indiana@treasure.com", 
        password: "da39a3ee5e6b4b0d3255bfef95601890afd80709", 
        picturePath: "indianajones.png", 
        friends: [], 
        location: "All Over the World", 
        occupation: "Treasure Hunter", 
        viewedProfile: 45468, 
        impressions: 19986, 
        createdAt: 1288090662, 
        updatedAt: 1288090662,
        __v: 0, 
    }, 
    {
        _id: userIds[3], 
        firstName: "Joey", 
        lastName: "Tribbiani", 
        email: "howyoudoin@gmail.com", 
        password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy", 
        picturePath: "howyoudoin.png", 
        friends: [], 
        location: "Los Angeles, CA", 
        occupation: "Actor", 
        viewedProfile: 41024, 
        impressions: 55316, 
        createdAt: 1219214568, 
        updatedAt: 1219214568,
        __v: 0, 
    }, 
    {
        _id: userIds[4], 
        firstName: "Princess", 
        lastName: "Anastasia", 
        email: "anastasia@gmail.com", 
        password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy", 
        picturePath: "princessanastasia.png", 
        friends: [], 
        location: "Russia", 
        occupation: "Princess Duties", 
        viewedProfile: 40212, 
        impressions: 7758, 
        createdAt: 1493463661, 
        updatedAt: 1493463661,
        __v: 0, 
    }, 
    {
        _id: userIds[5], 
        firstName: "Princess", 
        lastName: "Jazmine", 
        email: "jazmine@gmail.com", 
        password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy", 
        picturePath: "jazmine.png", 
        friends: [], 
        location: "San Antonio, TX", 
        occupation: "Princess Duties", 
        viewedProfile: 976, 
        impressions: 7658, 
        createdAt: 1381326073, 
        updatedAt: 1381326073,
        __v: 0, 
    }, 
    {
        _id: userIds[6], 
        firstName: "Captain", 
        lastName: "America", 
        email: "captainamerica@gmail.com", 
        password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy", 
        picturePath: "captainamerica.png", 
        friends: [], 
        location: "Incognito, Incognito", 
        occupation: "Everyone knows I'm a Shield Agent now", 
        viewedProfile: 1510, 
        impressions: 77579, 
        createdAt: 1714704324, 
        updatedAt: 1652548642,
        __v: 0, 
    }, 
    {
        _id: userIds[7], 
        firstName: "Harry", 
        lastName: "Potter", 
        email: "thepotionprince@hogwarts.com", 
        password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy", 
        picturePath: "harrypotterquidditch.png", 
        friends: [], 
        location: "Hogwarts", 
        occupation: "Enemy of the Heir Be Ware", 
        viewedProfile: 19420, 
        impressions: 82970, 
        createdAt: 1369908044, 
        updatedAt: 1369908654,
        __v: 0, 
    }, 
]; 



export const posts = [
    {
        _id: new mongoose.Types.ObjectId(),
        userId: userIds[1],  
        firstName: "Elizabeth", 
        lastName: "Wong", 
        location: "Secret Nation, SC",
        description: "Kung Fu Artist", 
        picturePath: "kungfuartist.png", 
        userPicturePath: "kungfuartist.png", 
        likes: new Map([
            [userIds[0], true],
            [userIds[2], true],
            [userIds[3], true],
            [userIds[4], true], 
        ]),
        comments: [
            "Take care of yourself", 
            "have some inner piece",
            "Until we meet again",
        ], 
    }, 
    {
        _id: new mongoose.Types.ObjectId(),
        userId: userIds[3],  
        firstName: "Joey", 
        lastName: "Tribbiani", 
        location: "Los Angeles, CA",
        description: "My name is Joey", 
        picturePath: "howyoudoin.png", 
        userPicturePath: "howyoudoin.png", 
        likes: new Map([
            [userIds[7], true],
            [userIds[4], true],
            [userIds[2], true],
            [userIds[1], true], 
        ]),
        comments: [
            "Hello, my name is Joey", 
            "I'm an actor",
            "how you doin'",
        ], 
    }, 
    {
        _id: new mongoose.Types.ObjectId(),
        userId: userIds[4],  
        firstName: "Princess", 
        lastName: "Anastasia", 
        location: "Russia",
        description: "I don't know what's happening here.", 
        picturePath: "princessanastasia.png", 
        userPicturePath: "anastasiauncertain.png", 
        likes: new Map([
            [userIds[1], true],
            [userIds[6], true],
            [userIds[3], true],
            [userIds[5], true], 
        ]),
        comments: [
            "There was once a time", 
            "Once Upon a December",
            "Dancing dreams",
        ], 
    }, 
    {
        _id: new mongoose.Types.ObjectId(),
        userId: userIds[5],  
        firstName: "Princess", 
        lastName: "Jazmine", 
        location: "San Antonio, Texas",
        description: "Let's fly all day every day on a magic carpet", 
        picturePath: "jazmine.png", 
        userPicturePath: "flyingcarpet.png", 
        likes: new Map([
            [userIds[1], true],
            [userIds[6], true],
            [userIds[3], true],
            [userIds[5], true], 
        ]),
        comments: [
            "That looks amazing!", 
            "Great job!",
            "Thanks for your service!",
        ], 
    }, 
    {
        _id: new mongoose.Types.ObjectId(),
        userId: userIds[6],  
        firstName: "Captain", 
        lastName: "America", 
        location: "Incognito, Incognito",
        description: "Everyone knows I'm a Shield Agent now", 
        picturePath: "captainamerica.png", 
        userPicturePath: "captainshield.png", 
        likes: new Map([
            [userIds[1], true],
            [userIds[3], true],
            [userIds[5], true],
            [userIds[7], true], 
        ]),
        comments: [
            "Welcome to Shield.", 
            "What about Hydra?",
            "'Ello Captain.",
        ], 
    }, 
    {
        _id: new mongoose.Types.ObjectId(),
        userId: userIds[7],  
        firstName: "Harry", 
        lastName: "Potter", 
        location: "Hogwarts",
        description: "I am the chosen one", 
        picturePath: "harrypotterquidditch.png", 
        userPicturePath: "harrypotterquidditch.png", 
        likes: new Map([
            [userIds[3], true],
            [userIds[4], true],
            [userIds[7], true],
           
        ]),
        comments: [
            "Expecto Patronum!", 
            "Expelliarmus!",
            "It's brilliant brilliant I say! Genius!",
        ], 
    }, 
   
    

]; 


