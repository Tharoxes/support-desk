const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const connectDB = require('./config/db')
const PORT = process.env.PORT;
const { errorHandler } = require('./middleware/errorMiddleware')

// connect to database
connectDB()

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/* example why using express-async-handler
const asyncHandler = require('express-async-handler')

express.get('/', asyncHandler(async (req, res, next) => {
    const bar = await foo.findAll(;
        res.send(bar))
}))

vanilla version
express.get('/', (req, res, next) => {
    foo.findAll()
    .then (bar => {
        res.send(bar)
    })
    .catch(next);
}) */


app.get("/", (req, res) => {
  res.status(200).json({ message: "Hi" });
});

// Routes
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/tickets", require("./routes/ticketRoutes"));

app.use(errorHandler)

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
