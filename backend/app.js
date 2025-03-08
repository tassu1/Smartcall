
import express from "express";
import { createServer } from "node:http";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import { connectToSocket } from "./src/controllers/socketManager.js";
import userRoutes from "./src/routes/userRoutes.js";


dotenv.config();

const app = express();
const server = createServer(app);
const io = connectToSocket(server);


const PORT = process.env.PORT || 8000;
app.set("port", PORT);


app.use(cors());
app.use(express.json({ limit: "40kb" }));
app.use(express.urlencoded({ limit: "40kb", extended: true }));


app.use("/api/v1/users", userRoutes);


const start = async () => {
    try {
        const mongoURI = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_CLUSTER}/${process.env.MONGO_DB}?retryWrites=true&w=majority&appName=Cluster0`;

        // Connect to MongoDB
        const connectdb = await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log(`MongoDB connected: ${connectdb.connection.host}`);

       
        server.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1); 
    }
};

start();