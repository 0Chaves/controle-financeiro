'use client'

import { useState } from "react"
import Form from "./form"

export default function FormPainel(){
    const [formActive, setFormActive] = useState(false)

    return(
        <div className="flex justify-start flex-col max-w-7xl mx-auto">
            <button className="bg-blue-400 rounded-md text-white p-3 shadow-lg hover:bg-blue-600 transition-all w-40 mb-2" onClick={() => setFormActive(!formActive)}>{formActive ? 'Cancelar' : 'Nova Transacao'}</button>
            {formActive && 
            <div className="bg-gray-100 shadow-md p-6 flex ">
                <Form/>
            </div> }
        </div>
    )
}