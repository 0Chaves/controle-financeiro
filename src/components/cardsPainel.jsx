import { getTrancacoes } from "@/lib/transacaoDB";
import Card from "./card";

export default async function CardsPainel(){

    const transacoes =  await getTrancacoes()

    return(
        <div className="space-y-4">
            {transacoes.map(transacao => <Card key={transacao._id} transacao={transacao} />)}
        </div>
    )
}