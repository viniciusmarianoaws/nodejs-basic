const express = require("express");
const app = express();

app.get("/", function (request, response) {
  return response.json({
    message: "Ola Dev JSON nodemon cabelo",
  });
});

app.listen(3000, () => {
  console.log("passei aqui");
});

//http://localhost:3000/
