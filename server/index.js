require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const { registerUser, loginUser } = require("./controllers/auth");
const dashboardData = require('./controllers/dashboard')
const getUserData = require("./controllers/getUserData")
const {saveSocials, saveProfile, saveLinks} = require("./controllers/saveSocials")
const {loadSocials, loadLinks} = require("./controllers/loadOldData")
//middlewares
app.use(express.json());
app.use(cors()); 

mongoose.set("strictQuery", false);
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.get("/", (req, res) => {
  //will use the fetch
  res.send("Hello from backend");
});

//backend code
app.post("/api/register", registerUser);
app.post("/api/login", loginUser);
app.post("/data/dashboard", dashboardData)
app.get("/get/:handle", getUserData)
app.post("/save/socials", saveSocials)
app.post("/save/profile", saveProfile)
app.post("/save/links", saveLinks)
app.post("/load/socials", loadSocials)
app.post("/load/links", loadLinks)

const port = process.env.PORT || 8080;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(port, () => {
      console.log(`Connected to database and Listening on ${port}`);
    });
  })
  .catch(function (e) {
    console.log(e);
  });
