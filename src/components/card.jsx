import { getTransacaoById } from "@/lib/transacaoDB";
import { TrendingUp, TrendingDown, Trash2 } from "lucide-react";
import DeleteButton from "./deleteButton";

export default function Card({transacao}){
    // const transacao = getTransacaoById(id_transacao)

    return(
        <div className="bg-white border-gray-300 border shadow-lg rounded-md flex justify-between py-4 px-6">
            <div className="flex flex-col text-left space-y-4">
                <div className="flex gap-2">
                    <div className={transacao.tipo === 'Entrada' ? "bg-green-100 w-fit h-fit p-2 rounded-full text-green-600" : "bg-red-100 w-fit h-fit p-2 rounded-full text-red-600"}>
                        {transacao.tipo === 'Entrada' ? <TrendingUp/> : <TrendingDown/>}
                    </div>
                    <div className="flex flex-col">
                        <div className="text-xl font-medium">{transacao.descricao}</div>
                        <div className="text-sm bg-gray-100 p-1 rounded-sm">{transacao.data.toLocaleDateString()}</div>
                    </div>
                </div>
                <div className={transacao.categoria == 'Alimentação' ? 'alimentacao' : transacao.categoria == 'Transporte' ? 'transporte' : transacao.categoria == 'Moradia' ? 'moradia' : transacao.categoria == 'Saúde' ? 'saude' : transacao.categoria == 'Educacao' ? 'educacao' : transacao.categoria == 'Lazer' ? 'lazer' : transacao.categoria == 'Trabalho' ? 'trabalho' : "outros"}>
                   {transacao.categoria} 
                </div>
            </div>
            <div className="flex flex-col items-end text-right space-y-4">
                <div className={transacao.tipo === 'Entrada'? "text-green-600 font-bold text-xl" : "text-red-600 font-bold text-xl"} >{transacao.tipo === 'Entrada'? `+ R$ ${transacao.valor}` : `- R$ ${transacao.valor}` }</div>
                <DeleteButton id={transacao._id}/>
            </div>
        </div>
    )
}