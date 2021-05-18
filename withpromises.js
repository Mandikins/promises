//Example using promises
const turnOnComputer = (os) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (os === 'Windows') {
          console.log("Welcome to Windows!")
          return resolve(true);
        }
        return reject("Technical Error!");
  
      }, 2500);
    });
  };
  
  turnOnComputer('Windows').then((computerStatus) => {
          if (computerStatus) {
      console.log("Your Computer is on!");
    } else {
      console.log("Something went wrong!");
    }
    return "Terra";
  }).then((instructor)=>{
      console.log(instructor);
      console.log('And then something else happened');
  }).catch((error) => {
    console.log("Failure: ", error)
  });