/*
there should be an object
it should store some dummy users

it should ask user for his username
 and password.
if username and password are correct
 the system should console.log his details

else the system should register new
if username already exits
 do not save that name

user with username and password as
required inputs
*/

let mainObj = {};
mainObj = {
  ak_alam: {
    userName: "ak_alam",
    pass: "input",
    email: "hello@gmail.com",
    age: 24,
  },
  razi: {
    userName: "razi",
    pass: "hunter",
    email: "razi@gmail.com",
    age: 23,
  },
  mubarak: {
    userName: "mubarak",
    pass: "pubg",
    email: "mubarak@gmail.com",
    age: 25,
  },
  shahid: {
    userName: "shahid",
    pass: "hunza",
    email: "shahid@gmail.com",
    age: 25,
  },
};

let userInput = prompt("username");
console.log(mainObj[userInput]);
if (mainObj[userInput]) {
  let currUser = mainObj[userInput];
  let i = 0;
  while (i < 3) {
    // if username and password are correct
    //  the system should console.log his details
    let pass = prompt("Your pass?");
    if (pass !== currUser.pass) i++;
    else {
      console.log("your Details", currUser);
      break;
    }
  }
} else {
  let newuser = prompt("new user");
  if (mainObj[newuser]) {
    alert("already exits");
  } else {
    while (true) {
      let newpass = prompt("new pass");
      if (newpass) {
        let newobj = { userName: newuser, pass: newpass };
        mainObj[newuser] = newobj;
        break;
      }
    }
  }
  console.log(mainObj);
}
