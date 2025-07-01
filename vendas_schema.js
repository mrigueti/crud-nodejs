import mongoose from "mongoose";

const VendasSchema = new mongoose.Schema({
    mes: Number,
    valor: Number     
})

export default mongoose.model("VendasMensal", VendasSchema)