
const dotenv = require("dotenv");
const express = require("express");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const adminRoutes= require("./routes/adminRoutes")
const { notFound, errorHandeler } = require("./middlewares/errorMiddleware");

const app = express();
dotenv.config();
connectDB();
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Api is running");
});
// app.get("/api/notes", (req, res) => {
//   res.json(notes);
// });
app.use("/api/admin",adminRoutes)
app.use("/api/users", userRoutes);

app.use(notFound)
app.use(errorHandeler)
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`server started on PORT ${PORT}`));
