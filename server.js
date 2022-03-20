const express = require("express")
const app = express()
const https = require("https")
const PORT = process.env.PORT || 3000

app.use(express.static(__dirname + "/client"));

// create Express-powered HTTP server


app.get("/", (req, res)=>{
    res.json({result: "ok"})
})

app.listen(PORT, ()=>{
    console.log(`Serer is running. ${PORT}`)
})
