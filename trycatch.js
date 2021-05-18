const db = [];
function addUserToDatabase(username) {
  if (!username || username.length < 3) {
    throw new Error('Must provide a username greater than 2 chars');
  }

  if (findUserInDatabase(username)) {
    throw new Error(`Username ${username} already exists. Choose another.`);
  }

  // All validations passed
  saveUserToDatabase(username);
  console.log(`Successfully added ${username} to database.`);
}

try {
  addUserToDatabase('John');  // Successful
  addUserToDatabase('Jo');    // Will throw error and be caught below   
  addUserToDatabase();        // Will throw error and be caught below
  addUserToDatabase('John2');
} catch (e) {
  console.error(`${e.name}: ${e.message}`);
}

console.log(db);

function saveUserToDatabase(user) {
  db.push(user);
}

function findUserInDatabase(user) {
  return db.includes(user);
}