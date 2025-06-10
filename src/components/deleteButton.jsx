'use client'

import { deleteTransacao } from "@/lib/transacaoDB"
import { Trash2 } from "lucide-react"

export default function DeleteButton({id}) {

    return(
        <button className="cursor-pointer rounded-md text-red-600 hover:bg-red-100 hover:text-red-800 transition-colors p-2" onClick={()=> deleteTransacao(id)}>
            <Trash2 className="w-5 h-5"/>
        </button>
    )
}