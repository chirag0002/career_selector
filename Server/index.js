import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import careerRoutes from "./routes/SitePaths.js"




const app = express();



app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
app.use(cors());

app.use('/',careerRoutes);


app.get("/",(req, res) => {
        res.json("Hola")
})


const CONNECTION_URL = "mongodb+srv://check:check123@cluster0.jz7uz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const PORT = process.env.PORT || 4000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=> app.listen(PORT, ()=> console.log(`Server running on: ${PORT}`)))
.catch((error) => console.log(error.message));
