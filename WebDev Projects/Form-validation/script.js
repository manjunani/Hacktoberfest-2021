console.log("this is a regex project");
let names = document.getElementById("name");
const email = document.getElementById("email");
const phonenumber = document.getElementById("number");
let interests = document.getElementById("interest");
let address = document.getElementById("address");

let nameValid = false;
let emailValid = false;
let phoneValid = false;

interests.addEventListener("focus", (r) => {
  r.target.style.background = "#e6fff7";
});
interests.addEventListener("blur", (t) => {
  t.target.style.background = "";
});
address.addEventListener("focus", (u) => {
  u.target.style.background = "#e6fff7";
});
address.addEventListener("blur", (p) => {
  p.target.style.background = "";
});

names.addEventListener("focus", (event) => {
  event.target.style.background = "#e6fff7";
});
names.addEventListener("blur", (e) => {
  console.log("name is blurred");
  e.target.style.background = "";
  let regex = /^[A-Za-z]([0-9a-zA-Z]){1,15}$/;
  let str = names.value;
  console.log(regex, str);
  if (regex.test(str)) {
    console.log("matched");
    names.classList.remove("is-invalid");
    nameValid = true;
  } else {
    console.log("no match");
    names.classList.add("is-invalid");
  }
});

email.addEventListener("focus", (events) => {
  events.target.style.background = "#e6fff7";
});
email.addEventListener("blur", (f) => {
  console.log("the email is blurred");
  f.target.style.background = "";
  let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
  let str = email.value;

  console.log(regex, str);
  if (regex.test(str)) {
    console.log("matched");
    email.classList.remove("is-invalid");
    emailValid = true;
  } else {
    console.log("not matched");
    email.classList.add("is-invalid");
  }
});

phonenumber.addEventListener("focus", (eventss) => {
  eventss.target.style.background = "#e6fff7";
});
phonenumber.addEventListener("blur", (g) => {
  console.log("the number is blurred");
  g.target.style.background = "";
  let regex = /^([0-9]){10}$/;
  let str = phonenumber.value;
  console.log(regex, str);
  if (regex.test(str)) {
    console.log("matched");
    phonenumber.classList.remove("is-invalid");
    phoneValid = true;
  } else {
    console.log("not matched");
    phonenumber.classList.add("is-invalid");
  }
});
let submits = document.getElementById("submit");
submits.addEventListener("click", (e) => {
  e.stopImmediatePropagation();
  console.log("submited");
  if (nameValid && phoneValid && emailValid) {
    console.log("everything is valid.");
    alert("Form submitted successfully!");
  } else {
    console.log("check! something is invalid.");

    alert("Error!");
  }
});
