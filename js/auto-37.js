// Change code below this line
// const getFriends = users => {
//     users.reduce((allFriends, user) => {
//     allFriends.push(...user.friends);
//   }, []);

//  return allFriends;
// }

// // const friends = getFriends(user);

// const getFriendStats = (acc, friend) => {
//  if (!acc.hasOwnProperty(friend)) {
//    acc[friend] = 0;
//  }
//  acc[friend] += 1;

//  return acc;
// }

// const getTotalFriendCount = users => users.reduce(getFriendStats, {});

// const friendCount = getTotalFriendCount(friends);
// console.log(friendCount)

// Change code above this line

const users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male"
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female"
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male"
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female"
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male"
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male"
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female"
  }
]

const getTotalFriendCount = users => {
   users.reduce( (acc, user) => {
    acc.push(...user.friends);
    return acc.length;
   }, [])
};

console.log(getTotalFriendCount(users));