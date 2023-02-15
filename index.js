const express = require('express');
const app = express();


function conv(data, from) {
    let to = from === "utf-8" ? "base64" : "utf-8";
    let buffer = Buffer.from(data, from);

    return buffer.toString(to);
}

app.get("/", async function (req, res) {
    let data = req.query.data || "Hello World";
    let type = req.query.type || "utf-8";

    let value = conv(data, type);

    res.send(value);
});

app.listen(process.env.PORT || 3000);