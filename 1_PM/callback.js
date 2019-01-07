// In an alternate universe, coins have a `true` and a `false` side.
// Write code that first gets a user via a getUser() call, then in the callback,
// flips a coin and tells the user whether or not their guess was correct

// coinToss takes 2 arguments, number/function
const coinToss = (guess, callback1) => {
  const result = Math.round(Math.random());
  const didWin = guess === result;
  callback1(didWin); // 1 argument, boolean
};

// getUser takes 1 argument, function
const getUser = callback2 => {
  const user = {
    firstName: "John",
    lastName: "Doe",
    guess: Math.round(Math.random())
  };
  callback2(user); // 1 argument, user object
};

// Define function anonymously within getUser to call cointoss, takes a user
getUser( (user) => {
  coinToss(user.guess, console.log) // Call console.log instead of console.log() since it is the function, () is a call of the function
}); 