import express from "express";

const NODE_PORT = process.env.NODE_PORT;

const app = express();

app.get("/api/users", (req, res) => {
  return res.json({"squadName":[{"name": "Bil", "location": "delhi"}, {"name": "Carlos", "location": "new delhi"}]})
});

app.listen(NODE_PORT, () => {
  console.log(`Server running at ${NODE_PORT}`);
});