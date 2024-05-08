const express = require("express");

const app = express();

app.use(express.json());

const PORT = 3000;



const personnels = [
  {
    id: 1,
    first_name: "mohmat",
    country: "Russia",
  },
  {
    id: 2,
    first_name: "siftine",
    country: "France",
  },
  {
    id: 3,
    first_name: "ilyass",
    country: "Argentina",
  },
  {
    id: 4,
    first_name: "asbos",
    country: "China",
  },
  {
    id: 5,
    first_name: "ma3zoz",
    country: "Philippines",
  },
];

app.listen(PORT, () => {
  console.log("I'm working in port " + PORT);
});

app.get("/", (req, res) => {
  res.json({ message: "Welcome to PERSONNEL page" });
});

app.get("/personnels", (req, res) => {
  res.json({ personnels });
});

app.post("/personnels/store", (req, res) => {
  console.log(req.body);
  const personnelsToAdd = {
    id: req.body.id,
    first_name: req.body.first_name,
    country: req.body.country,
  };
  personnels.push(personnelsToAdd);
  res.status(200).send(personnels);
});

app.get("/personnel/:id", (req, res) => {
  const personnelId = parseInt(req.params.id);
  const personnel = personnels.find(
    (personnel) => personnel.id === personnelId
  );
  if (!personnel) res.status(404).send("personnel Not found");
  res.json(personnel);
});
