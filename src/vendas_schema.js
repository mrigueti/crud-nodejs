import mongoose from "mongoose";

const VendasSchema = new mongoose.Schema({
    nomeProduto: String,
    mes: Number,
    valor: Number     
})

export default mongoose.model("VendasMensal", VendasSchema)