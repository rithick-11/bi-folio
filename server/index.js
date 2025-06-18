import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectToDb } from "./utils/db.js";

import userRouter from "./routes/userRoute.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const connectDbandListen = async () => {
  const port = process.env.PORT || 3042;
  await connectToDb();
  app.listen(port, () => {
    console.log(`server running on port http://localhost:${port}`);
  });
};

app.use("/api/users", userRouter);

app.get("/", (req, res) => {
  return res.send("Hello World");
});

connectDbandListen();
