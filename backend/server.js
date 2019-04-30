const mongoose = require("mongoose");
const express = require("express");
var cors = require("cors");
const bodyParser = require("body-parser");
const shortid = require("shortid");
const logger = require("morgan");
const ReviewRepository = require("./dataModel/review");
const SubmissionRepository = require("./dataModel/submission");

const API_PORT = 3001;
const app = express();
app.use(cors());
const router = express.Router();


// this is our MongoDB database
const dbRoute = "mongodb+srv://wat-improve-server:eKUsifTemEWeyQM1@wat-improve-y9x1z.mongodb.net/test?retryWrites=true";

// connects our back end code with the database
mongoose.connect(
  dbRoute,
  { useNewUrlParser: true }
);

let db = mongoose.connection;

db.once("open", () => console.log("connected to the database"));

// checks if connection with the database is successful
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// (optional) only made for logging and
// bodyParser, parses the request body to be a readable json format
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(logger("dev"));

//this retrieves a review based on its ID
router.get("/review/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  ReviewRepository.find({ id: id }, (err, data) => {
    if (err) return res.json({ success: false, error: err });
    console.log(data[0]);
    return res.json({ success: true, data: data[0] });
  });
});

router.get("/submission/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  SubmissionRepository.find({ id: id }, (err, data) => {
    if (err) return res.json({ success: false, error: err });
    console.log(data[0]);
    return res.json({ success: true, data: data[0] });
  });
});

// this is our update method
// this method overwrites existing data in our database
/*router.post("/review/:id", (req, res) => {
  const { id, update } = req.body;
  Data.findOneAndUpdate(id, update, err => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});

// this is our delete method
// this method removes existing data in our database
/*router.delete("/review", (req, res) => {
  const { id } = req.body;
  Data.findOneAndDelete(id, err => {
    if (err) return res.send(err);
    return res.json({ success: true });
  });
});*/


// adds new request in our database
router.post("/review", (req, res) => {
  console.log("/review");
  let data = new ReviewRepository();

  const id = shortid.generate();
  console.log(id);
  const { name, message, reviewAreas } = req.body;
  console.log(name);
  if (!name) {
    return res.json({
      success: false,
      error: "INVALID INPUTS"
    });
  }
  data.name = name;
  data.message = message;
  data.id = id;
  data.reviewAreas = reviewAreas;
  data.finished = false;
  data.save(err => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, id: id });
  });
});


router.post("/submission", (req, res) => {
  console.log("/submission");
  let data = new SubmissionRepository();
  let reviewData = new ReviewRepository();

  const { id, reviewAreas, completeReview } = req.body;
  console.log(id);
  if (!id || !completeReview || !reviewAreas) {
    return res.json({
      success: false,
      error: "INVALID INPUTS"
    });
  }
  data.id = id;
  data.completeReview = completeReview;
  data.reviewAreas = reviewAreas
  data.save(err => {
    if (err) return res.json({ success: false, error: err });
  })
  console.log("f my life");

  ReviewRepository.findOneAndUpdate({ id: id }, { $set: { finished: true } }, err => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  })

});

// /api for api calls
app.use("/api", router);


app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));