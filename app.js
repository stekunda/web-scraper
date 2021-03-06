const scraperRouter = require("./routes/scraperRouter");

const express = require("express");
const path = require("path");
const app = express();

const PORT = process.env.PORT || 5000;

app.use(scraperRouter);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
