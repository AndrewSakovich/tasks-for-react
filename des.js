// const person = {
//     name: {
//         first: 'peter',
//         last: 'smith',
//     },

//     age: 27,
// }

// const {name:{first:firstName, last: lastName}}= person
// console.log(firstName, lastName)

const person = {
  name: {
    first: "peter",
    last: "smith",
  },
  age: 27,
  role: "admin",
};

const { permission: { role = "user" } = {} } = person;
console.log(role);
