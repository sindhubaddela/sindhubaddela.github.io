const listItems = document.querySelectorAll("li");
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");


function toggleDone(e) {
  if (!e.target.className) {
    e.target.className = "done";
  } else {
    e.target.className = "";
  }
}
listItems.forEach((item) => {
  item.addEventListener("toggle", toggleDone);
});

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Kodachadri is cool, ${myName}`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Kodachadri is cool, ${storedName}`;
}


myButton.addEventListener("click", () => {
  setUserName();
});