'use client'
import Image from "next/image";
import { TrendingUp, TrendingDown, Wallet, Calendar } from "lucide-react"; 
import { useState } from "react";
import { saveTransacao } from "@/lib/transacaoDB";
import { categoria, tipo } from "@/enums/enums";
import CardsPainelClient from "@/components/cards_painel_client";
export default function Home() {
  const [formActive, setFormActive] = useState(false)
  const [transacao, setTransacao] = useState({
    descricao: '',
    categoria: '',
    tipo: '',
    data: null,
    valor: 0
  })

  return (
    <main className="min-h-screen min-w-screen text-center">
      <div className="p-4 max-w-7xl mt-10 mx-auto">
        <h1 className="text-gray-800 text-3xl font-bold">Controle Financeiro</h1>
        <p className="text-gray-600">Controle suas finanças de forma prática e eficiente</p>
      </div>
      <div className="flex max-w-7xl mx-auto gap-5 mb-10">
        <div className="p-6 w-md mt-10 mx-auto bg-gradient-to-r from-green-400 to-green-500 shadow-lg rounded-md text-white font-bold">
          <div className="flex justify-between">
            <span>Entradas</span>
            <TrendingUp/>
          </div>
          <div className="flex justify-start">
            <p>valor</p>
          </div>
        </div>
        <div className="p-6 w-md mt-10 mx-auto bg-gradient-to-r from-red-400 to-red-500 shadow-lg rounded-md  text-white font-bold">
          <div className="flex justify-between">
            <span>Saídas</span>
            <TrendingDown/>
          </div>
          <div className="flex justify-start">
            <p>valor</p>
          </div>
        </div>
        <div className="p-6 w-md mt-10 mx-auto bg-gradient-to-r from-blue-400 to-blue-500 shadow-lg rounded-md  text-white font-bold">
          <div className="flex justify-between">
            <span>Saldo Total</span>
            <Wallet/>
          </div>
          <div className="flex justify-start">
            <p>valor</p>
          </div>
        </div>
      </div>
      <div className="flex justify-start flex-col max-w-7xl mx-auto">
        <button className="bg-blue-400 rounded-md text-white p-3 shadow-lg hover:bg-blue-600 transition-all w-40" onClick={() => setFormActive(!formActive)}>{formActive ? 'Cancelar' : 'Nova Transacao'}</button>
        {formActive && 
        <div className="bg-gray-100 shadow-md p-6 flex ">
          <form className="w-full space-y-6" onSubmit={(e)=>{
            e.preventDefault()
            saveTransacao(transacao)
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
        </div> }
      </div>
      <div className="bg-white rounded-lg shadow-lg p-2 max-w-7xl mx-auto mt-4">
          <div className="flex gap-3 text-left">
            <Calendar/>
            <h3 className=" text-xl">Últimas transações</h3>
          </div>
          <CardsPainelClient/>
      </div>
    </main>
  );
}
