import express from "express"

const app = express()

const PORT = "mongodb+srv://biplovegautam123:<password>@cluster0.hgtqw8w.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

app.get("/",(req, res)=>{
    res.send("This is me from the server side woo ho")
})

app.get("/fart",(req,res)=>{
    res.send("Hello world this is my art sound suuu make it suuuu")
})

app.listen(PORT, ()=>{
    console.log(`Server is running at port ${PORT}`)
})

