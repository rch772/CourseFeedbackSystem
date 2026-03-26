const express = require("express");
const cors = require("cors");

const feedbackRoutes = require("./routes/feedbackRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// main route
app.use("/api/feedback", feedbackRoutes);

app.get("/", (req, res) => {
    res.send("MVC Backend Running 🚀");
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});