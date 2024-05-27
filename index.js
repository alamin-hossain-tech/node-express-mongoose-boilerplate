import express from "express";
import cors from "cors";
import dbConnect from "./db/db.js";
import initRootRouter from "./router/rootRouter.js";
const app = express();
const PORT = process.env.PORT || 3000;

//middleware
app.use(express.json());
app.use(cors());

// database connection
dbConnect();

// init root router
initRootRouter(app);
// listen server
app.listen(PORT, () => console.log(`Server running on Port: ${PORT}`));
