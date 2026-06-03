const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("DevSpace fonctionne 🚀");
});

app.listen(3000, () => {
    console.log("Serveur lancé sur 3000");
});

console.log("PID:", process.pid);
console.log("SERVER START");
 
