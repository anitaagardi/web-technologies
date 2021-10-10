const http = require("http");
const port = 3000;
var express = require("express");
var app = express();
var cors = require("cors");
app.use(cors());

app.get("/personsimple", function (req, res) {
  var data = {
    name: "Nagy Endre",
    age: "78",
    profession: "zenesz",
    payment: "250000",
  };
  res.header("Content-Type", "application/json");
  res.send(JSON.stringify(data));
});
app.get("/persons", function (req, res) {
  var data = [
    {
      firstName: "Kódoló1",
      lastName: "Marcipán1",
      address: {
        streetAddress: "JavaScript street 4132.",
        city: "Kódváros1",
        state: "Kódvölgyvölgy1",
        postalCode: "210021",
      },
      phoneNumbers: ["0670 555-1234", "0646 555-4567"],
    },
    {
      firstName: "Kódoló2",
      lastName: "Marcipán2",
      address: {
        streetAddress: "JavaScript street 4132.",
        city: "Kódváros2",
        state: "Kódvölgyvölgy2",
        postalCode: "210021",
      },
      phoneNumbers: ["0670 555-1234", "0646 555-4567"],
    },
    {
      firstName: "Kódoló3",
      lastName: "Marcipán3",
      address: {
        streetAddress: "JavaScript street 4132.",
        city: "Kódváros3",
        state: "Kódvölgyvölgy3",
        postalCode: "210021",
      },
      phoneNumbers: ["0670 555-1234", "0646 555-4567"],
    },
  ];
  res.header("Content-Type", "application/json");
  res.send(JSON.stringify(data));
});
app.get("/personobject", function (req, res) {
  var data = {
    firstName: "Kódoló1",
    lastName: "Marcipán1",
    age: 25,
    address: {
      "street number": "2. utca 21.",
      city: "New York",
      state: "NY",
      "postal code": "10021",
    },
    "phone number": [
      {
        type: "home",
        number: "212 555-1234",
      },
      {
        type: "fax",
        number: "646 555-4567",
      },
    ],
  };
  res.header("Content-Type", "application/json");
  res.send(JSON.stringify(data));
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
