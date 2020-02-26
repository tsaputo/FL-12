1.
function maxElement(arr) {
   return Math.max(...arr);
}

// Example:
// const arr = [1, 2, 3 , 4]
// maxElement(arr);

2.
function copyArray(arr) {
   return new Array(...arr); // or  [...arr]
}

// Example:
// const arr = [1, 2, 3 , 4]
// const copiedArr = copyArray(arr);
// console.log(arr, copiedArr);
// console.log(arr === copiedArr);


3. 
function addUniqueId(obj) {
   return {
       id: Symbol(),
       ...obj
   }   
}

// Example:
// addUniqueId({name: "Ivan"});

4. 
function regroupObject({name: firstName, details: {id, age, university } }) {
   return {
        university,
        user: {
            age,
            firstName,
            id
        }
  };
}

// Example:
// const oldObj = {name: 'Someone', details: {id: 1, age: 11, university: 'UNI'}}
// regroupObject(oldObj);

5. 
function findUniqueElements(arr) {
   let uniqueElements = new Set(arr);
   return [...uniqueElements];
}

// Example:
// const arr = [1, 1, 2, 3, 20, 2, 20, 10, 15, 1]
// findUniqueElements(arr);

6. 
function hideNumber(number) {
    const charsToShow = 4;    
    return number.slice(-charsToShow).padStart(number.length, '*');
}

// Example:
// const phoneNumber = '0123456789';
// console.log(hideNumber(phoneNumber));


7.
function required() {
  throw new Error("Missing property");
}

function add(x = required(), y = required()) {
   return x + y;
}

// Example:
// add(1, 2);
// add(1);

8. 
const usersUrl = "https://jsonplaceholder.typicode.com/users"
function loadUserNames(url, callback) {
    fetch(url)
       .then(response => response.json())
       .then(data => {
           let sortedUserNames = data.map(user => user.name).sort();
           callback(sortedUserNames);
       });
}  
// Example:
// loadUserNames(usersUrl, (names) => { console.log(names)});

9. 
const usersUrl = "https://jsonplaceholder.typicode.com/users"
async function loadUserNamesAsync(url) {
    let response = await fetch(url);
    let users = await response.json();
    
    return users.map(user => user.name).sort();
}

// Example:
// loadUserNamesAsync(usersUrl).then(names => console.log(names))
