'use client'

import { useState } from "react"
import Form from "./form"
import { PlusCircle } from "lucide-react"

export default function FormPainel(){
    const [formActive, setFormActive] = useState(false)

    return(
        <div className="flex justify-start flex-col max-w-7xl mx-auto">
            <button className="bg-blue-600 rounded-md text-white px-3 py-2 shadow-lg hover:bg-blue-800 transition-all w-45 mb-2 flex flex-row items-center gap-2 justify-center" onClick={() => setFormActive(!formActive)}>{formActive ? '' : <PlusCircle/>}{formActive ? 'Cancelar' : 'Nova Transacao'}</button>
            {formActive && 
            <div className="bg-gray-100 shadow-md p-6 flex ">
                <Form/>
            </div> }
        </div>
    )
}