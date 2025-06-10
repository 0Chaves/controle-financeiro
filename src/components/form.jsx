'use client'
import { saveTransacao } from "@/lib/transacaoDB"
import { useState } from "react"
import { categoria, tipo } from "@/enums/enums";


export default function Form(){

    const [transacao, setTransacao] = useState({
    descricao: '',
    categoria: '',
    tipo: '',
    data: null,
    valor: 0
  })

    return(
        <form className="w-full space-y-6" onSubmit={(e)=>{
            e.preventDefault()
            saveTransacao(transacao)
            setTransacao({
              descricao: '',
              categoria: '',
              tipo: '',
              valor: 0
            })
            alert('Transação salva com sucesso')
          }}>
            <div className="flex justify-between  w-full gap-6 ">
              <div className="flex flex-col items-start w-full">
                <label className="">Descricao *</label>
                <input type="text" value={transacao.descricao} onChange={(e)=>setTransacao({...transacao, descricao: e.target.value})} placeholder="Descrição" className=" bg-white border border-gray-400 rounded-md w-full p-2" required/>
              </div>
              <div className="w-full">
                <label htmlFor="">Valor *</label>
                <input type="number" value={transacao.valor} onChange={(e)=>setTransacao({...transacao, valor: e.target.value})} placeholder="0.00" className="bg-white border border-gray-400 rounded-md w-full p-2" required/>
              </div>
            </div>
            <div className="flex justify-between  w-full gap-6">
              <div>
                <label htmlFor="">Categoria *</label>
                <select name="categoria" id="" value={transacao.categoria} onChange={(e)=>setTransacao({...transacao, categoria: e.target.value})} className=" bg-white border border-gray-400 rounded-md w-full p-2" required>
                  <option hidden disabled value="">Selecione uma categoria</option>
                  {categoria.map(categoria=><option value={categoria}>{categoria}</option> )}
                </select>
              </div>
              <div>
                <label htmlFor="">Tipo *</label>
                <select name="tipo" id="" value={transacao.tipo} onChange={(e)=>{setTransacao({...transacao, tipo: e.target.value})}} className=" bg-white border border-gray-400 rounded-md w-full p-2" required>
                  <option hidden disabled value="">Selecione o tipo</option>
                  {tipo.map(tipo=><option value={tipo}>{tipo}</option> )}
                </select>
              </div>
            </div>
            <div>
              <label htmlFor="">Data *</label>
              <input type="date" value={transacao.data} onChange={(e)=>setTransacao({...transacao, data: e.target.value})} required/>
            </div>
            <button className="bg-blue-500 text-white p-2 rounded-md hover:cursor-pointer hover:bg-blue-600">Nova Transacao</button>
        </form>
    )
}