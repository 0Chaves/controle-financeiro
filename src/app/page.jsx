import Image from "next/image";
import { TrendingUp, TrendingDown, Wallet, Calendar } from "lucide-react"; 
import FormPainel from "@/components/formPainel";
import CardsPainel from "@/components/cardsPainel";
export default function Home() {

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
      <FormPainel/>
      <div className="bg-white rounded-lg shadow-lg p-2 max-w-7xl mx-auto mt-4">
          <div className="flex gap-3 text-left">
            <Calendar/>
            <h3 className=" text-xl">Últimas transações</h3>
          </div>
          <CardsPainel/>
      </div>
    </main>
  );
}
