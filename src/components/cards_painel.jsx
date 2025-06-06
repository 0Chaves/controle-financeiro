import { getTrancacoes } from "@/lib/transacaoDB";

export default async function Cards_painel(){

    const transacoes = await getTrancacoes()

    return(
        <div className="space-y-4">

        </div>
    )
}