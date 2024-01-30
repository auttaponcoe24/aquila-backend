require("dotenv").config();
const express = require("express");

const notFoundMiddleware = require("./middlewares/not-found");
const errorMiddleware = require("./middlewares/error");

const cheatRoute = require("./routes/cheat-route");

const app = express();

app.use(express.json());
app.use(express.static("public"));

app.use("/", cheatRoute);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

const port = process.env.PORT || 5555;
app.listen(port, () => console.log(`server running on port ${port}`));
