const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req,res)=>{
   res.json({
      status:true,
      name:"World Cup Predictor",
      creator:"AmirAli Forouzan Asl"
   });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
   console.log("Server Started");
});
