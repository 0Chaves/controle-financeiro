import Image from "next/image";
import { TrendingUp, TrendingDown, Wallet, Calendar } from "lucide-react"; 
import FormPainel from "@/components/formPainel";
import CardsPainel from "@/components/cardsPainel";
import { getTrancacoes } from "@/lib/transacaoDB";
export default async function Home() {

  const transacoes = await getTrancacoes()

  const saldoTotal = () => {
    let saldoTotal = 0
    transacoes.map(t =>{
      if(t.tipo === "Entrada"){
        saldoTotal += t.valor
      }
      else{
        saldoTotal -= t.valor
      }
    })
    return saldoTotal
  }

  const entradaTotal = () => {
    let entradaTotal = 0
    transacoes.map(t =>{
      if(t.tipo === "Entrada"){
        entradaTotal += t.valor
      }
    })
    return entradaTotal
  }

  const saidaTotal = () => {
    let saidaTotal = 0
    transacoes.map(t =>{
      if(t.tipo === "Saida"){
        saidaTotal += t.valor
      }
    })
    return saidaTotal
  }

  return (
    <main className="min-h-screen min-w-screen text-center">
      <div className="p-4 max-w-7xl mt-10 mx-auto text-left">
        <h1 className="text-gray-800 text-3xl font-bold">Controle Financeiro</h1>
        <p className="text-gray-600">Controle suas finanças de forma prática e eficiente</p>
      </div>
      <div className="flex max-w-7xl mx-auto gap-5 mb-10">
        <div className="p-6 w-md mt-10 mx-auto bg-gradient-to-r from-green-500 to-green-600 shadow-lg rounded-md text-white font-bold">
          <div className="flex justify-between">
            <span className="text-sm font-light">Entradas</span>
            <TrendingUp/>
          </div>
          <div className="flex justify-start">
            <p className="text-2xl">R$ {entradaTotal()}</p>
          </div>
        </div>
        <div className="p-6 w-md mt-10 mx-auto bg-gradient-to-r from-red-500 to-red-600 shadow-lg rounded-md  text-white font-bold">
          <div className="flex justify-between">
            <span className="text-sm font-light">Saídas</span>
            <TrendingDown/>
          </div>
          <div className="flex justify-start">
            <p className="text-2xl">R$ {saidaTotal()}</p>
          </div>
        </div>
        <div className="p-6 w-md mt-10 mx-auto bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg rounded-md  text-white font-bold">
          <div className="flex justify-between">
            <span className="text-sm font-light">Saldo Total</span>
            <Wallet/>
          </div>
          <div className="flex justify-start">
            <p className={saldoTotal() > 0 ? "text-white text-2xl" : "text-red-600 text-2xl"}>R$ {saldoTotal()}</p>
          </div>
        </div>
      </div>
      <FormPainel/>
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-7xl mx-auto mt-4">
          <div className="flex gap-3 text-left mb-4">
            <Calendar/>
            <h3 className=" text-xl">Últimas transações</h3>
          </div>
          <CardsPainel/>
      </div>
    </main>
  );
}
