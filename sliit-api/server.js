const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./src/models');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });


app.get("/", (req, res) => {
    // res.json({ message: "Backend app is running well on browser" });
    res.send('Backend app is running well on browser')
  });

require('./src/routes/tutorial.routes')(app);
const PORT = process.env.PORT  || 8200;
app.listen();
app.listen(PORT, () => {
    console.log(`server is up and running on PORT ${PORT}`);
});