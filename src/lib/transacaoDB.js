'use server'

import connectDB from "./connectDB"
import Transacao from "@/models/transacao"
import xss from "xss"
import { revalidatePath } from "next/cache"

export async function getTrancacoes(){
    await connectDB()
    const transacoes = await Transacao.find({}).lean()
    return transacoes.map(t=>({
        ...t,
        _id: t._id.toString()
    }))
}

export async function getTransacaoById(id){
    await connectDB()
    return await Transacao.findById(id)
}

export async function saveTransacao(transacao) {
    await connectDB()
    const descricao = xss(transacao.descricao)
    const categoria = xss(transacao.categoria)
    const tipo = xss(transacao.tipo)
    const valor = xss(transacao.valor)
    const data = xss(transacao.data)
    const novaTransacao = new Transacao({descricao,categoria,tipo,data,valor})
    await novaTransacao.save()
    revalidatePath('/')
}

export async function deleteTransacao(id){
    console.log("Ta funconaon?")
    await connectDB()
    console.log("AAAAAA")
    await Transacao.findByIdAndDelete(id)
    console.log("Transação deletada")
    revalidatePath('/')
}