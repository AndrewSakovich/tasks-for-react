// const people = ["chris", "sandra", 'bob'];

// const [a, ...others] = people;
// console.log(a, others);

const dict = {
  duck: "quack",
  dog: "wuff",
  mouse: "squeak",
  hamster: "squeak",
};

const res = Object.entries(dict).filter(([key, value]) => value ===  "squeak").map(([key]) => key)

console.log(res);
