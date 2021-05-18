  //Example without promises

let completed = false;

function turnOnComputer(os) {

  setTimeout(() => {
     if (os === 'Windows') {
      console.log("Welcome to Windows!");
      completed=true;
    } else {
      console.log("Technical Error!");
      completed = false;
    }
  }, 2500);

}

console.log("Turning on your computer...");

turnOnComputer('Windows');

if (completed) {
  console.log("Your Computer is on!");
} else {
  console.log("Something went wrong!");
}

