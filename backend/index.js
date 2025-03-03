const express = require("express");
const cors = require("cors")
const db = require("./db")

const app = express();
const port = 3000;
app.use(cors())


app.get("/", async (req, res) => {
  await db.authenticate();
  res.json({ "data": "data" })
})

app.listen(port, () => {
  console.log(`App escuchando en el puerto ${port} `, port)
})