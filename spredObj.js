const defaults = {
  host: "localhost",
  dbName: "blog",
  user: "admin",
};

const opts = {
  user: "john",
  password: "utopia",
};
const port = 8888;
const res = { ...defaults,
     ...opts,
      port,
       connect(){

        } };
console.log(res);
