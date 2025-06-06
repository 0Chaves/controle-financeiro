'use client'

import dynamic from "next/dynamic"

const CardsPainel = dynamic(()=> import('./cards_painel'), {
    ssr:true
})

export default function CardsPainelClient(){
    return <CardsPainel/>
}