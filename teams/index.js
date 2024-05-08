const express = require("express");

const app = express();

app.use(express.json());

const PORT = 3000;

const teams = [
  {
    id: 1,
    first_name: "Chastity Works",
    country: "Russia",
  },
  {
    id: 2,
    first_name: "Opaline Lahrs",
    country: "France",
  },
  {
    id: 3,
    first_name: "Clo Hurling",
    country: "Argentina",
  },
  {
    id: 4,
    first_name: "Carlie Sandwith",
    country: "China",
  },
  {
    id: 5,
    first_name: "Sherlocke Skehens",
    country: "Philippines",
  },
  {
    id: 6,
    first_name: "Vidovic Elvidge",
    country: "Indonesia",
  },
  {
    id: 7,
    first_name: "Denney Crinson",
    country: "Indonesia",
  },
  {
    id: 8,
    first_name: "Gordie Dimitrijevic",
    country: "Botswana",
  },
  {
    id: 9,
    first_name: "Nicolea Chilles",
    country: "Finland",
  },
  {
    id: 10,
    first_name: "Daryle Wethers",
    country: "France",
  },
];

app.listen(PORT, () => {
  console.log("I'm working in port " + PORT);
});

app.get("/", (req, res) => {
  res.json({ message: "Welcome to home page" });
});

app.get("/teams", (req, res) => {
  res.json({ teams });
});

app.post("/teams/store", (req, res) => {
  console.log(req.body);
  const teamsToAdd = {
    id: req.body.id,
    first_name: req.body.first_name,
    country: req.body.country,
  };
  teams.push(teamsToAdd);
  res.status(200).send(teams);
});

app.get("/team/:id", (req, res) => {
  const teamId = parseInt(req.params.id);
  const team = teams.find((team) => team.id === teamId);
  if (!team) res.status(404).send("Team Not found");
  res.json(team);
});
