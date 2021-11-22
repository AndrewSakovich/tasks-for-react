const dict = {
  duck: "quack",
  dog: "wuff",
  mouse: "sqeak",
};

const { duck, ...otherAnimals } = dict;

console.log(duck, otherAnimals);
