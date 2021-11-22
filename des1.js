function connect({ host = "localhost",
                   port = 12345,
                   user = "guest" } = {}) {
  console.log("user:", user, "port:", port, "host:", host);
}

connect({
  //   host: "localhost",
    port: 1829,
  //   user: "peter",
});
