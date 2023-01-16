// Change code below this line
const getFriends = users => {
    users.reduce((allFriends, user) => {
    allFriends.push(...user.friends);
  }, []);

 return allFriends;
}

// const friends = getFriends(user);

const getFriendStats = (acc, friend) => {
 if (!acc.hasOwnProperty(friend)) {
   acc[friend] = 0;
 }
 acc[friend] += 1;

 return acc;
}

const getTotalFriendCount = users => users.reduce(getFriendStats, {});

// const friendCount = getTotalFriendCount(friends);
// console.log(friendCount)

// Change code above this line