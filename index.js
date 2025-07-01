import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import VendasSchema from "./vendas_schema.js";

dotenv.config();
process.env.MONGO_DB;

const app = express();
const PORT = 3000;

const connectdb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB);
        console.log("Conectado ao MongoDB");
    } catch (error) {
        console.log("Erro ao conectar ao MongoDB", error);
    }
};
connectdb();

app.post("/vendas", async (req, res) => (
    res.send("")
))

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));
