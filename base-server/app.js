const express = require("express");
const dbConnect = require("./server");
const cors = require("cors");
const userRouter = require("./routes/userRoutes");
const deviceRouter = require("./routes/deviceRoutes");

dbConnect();
const app = express();
app.use(cors());
app.use(express.json()); // middle ware for parsing body object..
app.use("/api/v1/users", userRouter);
app.use("/api/v1/devices", deviceRouter);
//app.use("/api/v1/prediction", predictionRouter);

app.listen(process.env.PORT, () => {
  console.log(`server started at ${process.env.PORT}...`);
});
