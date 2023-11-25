const express = require("express");
const cors = require("cors");

const app = require("./server");
const userRoutes = require("./routes/user.routes");
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

// all user related routes are handled by this route
app.use("/user", userRoutes);

// listening to requests
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

process.on("SIGINT", function () {
  console.log("\nGracefully shutting down from SIGINT (Ctrl-C)");
  process.exit(0);
});

process.on("SIGTERM", function () {
  console.log("\nGracefully shutting down from SIGTERM (Ctrl-C)");
  process.exit(0);
});
