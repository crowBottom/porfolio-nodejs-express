const express = require("express")

const app = express()

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/home.html")
})

app.listen(process.env.PORT || 5000, () => {
  console.log("Server: port 5000")
})
