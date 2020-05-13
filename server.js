const express = require("express");
const app = express();
const port = 3000;
const landingPageAddress = "/index.html";

// Specifying css and other content static address
app.use(express.static("public"));

// Sends data for get requests
app.get("/", (req, res) => {
    res.sendFile(__dirname + landingPageAddress);
});

app.listen(port, () => {
    console.log("Server appreciating poetic nonesense on port " + port);
});
