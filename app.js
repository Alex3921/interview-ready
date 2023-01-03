// Local server configuration
import express from "express";

const app = express();
app.use(express.static("."));
app.use(express.static("javascript"));

const port = 3000;
app.listen(port, () => {
    console.log(`listening on ${port}`);
});