// const dog = {
//   name: "dog",
//   voice: "woof",
//   say: function () {
//     console.log(this.name, "goes", this.voice);
//   },
// };

// const cat = {
//   name: "cat",
//   voice: "meow",
//   say: function () {
//     console.log(this.name, "goes", this.voice);
//   },
// };
// dog.say();
// cat.say();

// const animal = {
//   say: function () {
//     console.log(this.name, "goes", this.voice);
//   },
// };

// const dog = {
//   name: "dog",
//   voice: "woof",
// };
// Object.setPrototypeOf(dog, animal)

// const cat = {
//   name: "cat",
//   voice: "meow",
// };
// Object.setPrototypeOf(cat, animal)
// dog.say();
// cat.say();

const animal = {
  say: function () {
    console.log(this.name, "goes", this.voice);
  },
};

function createAnimal(name, voice) {
  const result = Object.create(animal);
  result.name = name;
  result.voice = voice;
  return result;
}

const dog = createAnimal("dog", "woof");
const cat = createAnimal("cat", "meow");

dog.say();
cat.say();

// const dog = Object.create(animal);
// dog.name = "Dog";
// dog.voice = "woof";
// dog.say();
