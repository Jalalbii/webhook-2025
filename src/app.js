const express = require("express")
const app = express()
app.use(express.json())


app.post("/webhook", (req, res) => {
    console.log("Webhook received")
    console.log("Body ===> ", req.body)
    console.log("Event ===> ", req.headers['x-github-event'])
    res.send("Webhook received :) on my app ")
})


app.get("/",(req, res) => {
    res.send("This is webhook project")
})

app.listen(3000, () => {
    console.log("Listening on PORT 3000")
})