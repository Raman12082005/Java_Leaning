// singelton object

let tinderuser = new Object()
console.log(tinderuser); // {}

tinderuser = {}
console.log(tinderuser); // {}

tinderuser.ID = "2024kucp1104"
tinderuser.name = "Manav"
tinderuser.isLoggedIn = false

let regularuser = {
    email : "Raman@gmail.com",
    userfullname : {
        firstname : "Ramandeep",
        Lastname : "Yadav"
    }
}
console.log(regularuser.email); // Raman@gmail.com
console.log(regularuser.userfullname); // { firstname: 'Ramandeep', Lastname: 'Yadav' }
console.log(regularuser.userfullname.firstname); // Ramandeep

let obj1 = {1: "a", 2: "b"}
let obj2 = {3: "c", 4: "d"}

let obj3 = {obj1 , obj2}
console.log(obj3); // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

obj3 = Object.assign(obj1, obj2)
console.log(obj3); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

obj3 = Object.assign({}, obj1, obj2) // (target, sourse1, sourse2, .......)
console.log(obj3); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

// spreading
obj3 = {...obj1, ...obj2}
console.log(obj3); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

obj3 = {...obj1, ...obj2, ...obj3}
console.log(obj3); /* {
  '1': 'a',
  '2': 'b',
  '3': 'c',
  '4': 'd',
  obj1: { '1': 'a', '2': 'b' },
  obj2: { '3': 'c', '4': 'd' }
} */

let users = [
    {
        id : 1,
        email: "a@gmail.com"
    },
    {
        id : 2,
        email: "b@gmail.com"
    },
    {
        id : 3,
        email: "c@gmail.com"
    }
]

console.log(users[1]); // { id: 2, email: 'b@gmail.com' }
console.log(users[2].email); // c@gmail.com

console.log(tinderuser); // { ID: '2024kucp1104', name: 'Manav', isLoggedIn: false }
console.log(Object.keys(tinderuser)); // [ 'ID', 'name', 'isLoggedIn' ] -> array
console.log(Object.keys(tinderuser).length); // 3
console.log(Object.values(tinderuser)); // [ '2024kucp1104', 'Manav', false ] -> array


// how to check if the key is present or not
console.log(tinderuser.hasOwnProperty('isLoggedIn')); // true
console.log(tinderuser.hasOwnProperty('Manav')); // flase





