import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import VendasSchema from "./vendas_schema.js";

dotenv.config();
process.env.MONGO_DB;

const app = express();
const PORT = 3000;

app.use(express.json());

const connectdb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB);
    console.log("Conectado ao MongoDB");
  } catch (error) {
    console.log("Erro ao conectar ao MongoDB", error);
  }
};
connectdb();

app.post("/vendas", async (req, res) => {
  try {
    const nova_venda_mensal = await VendasSchema.create(req.body);
    res.json(nova_venda_mensal);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro ao criar venda" });
  }
});

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));
