import mongoose from "mongoose";
import { categoria, tipo } from "@/enums/enums";

const transacaoSchema = new mongoose.Schema({
    descricao: {
        type: String,
        required: true
    },
    categoria: {
        type: String,
        enum: categoria,
        required: true
    },
    tipo: {
        type: String,
        enum: tipo,
        required: true
    },
    data: {
        type: Date,
        required: true},
    valor: {
        type: Number,
        required: true
    }
})

const Transacao = mongoose.models.Transacao || mongoose.model("Transacao", transacaoSchema)
export default Transacao