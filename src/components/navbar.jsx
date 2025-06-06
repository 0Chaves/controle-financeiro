import Link from "next/link";
import { ChartPie, BadgeDollarSign } from "lucide-react";

export default function Navbar(){
    return(
        <nav className="bg-gradient-to-t from-green-400 to-green-500 flex justify-around p-2 shadow sticky top-0 z-10">
            <div>

            </div>
            <div>
                <Link href={"/"}>
                <div className="flex flex-row">
                    <div className="flex flex-row justify-center items-center px-2 space-x-1">
                        <div className="bg-gray-400 rounded-full p-1">
                            <ChartPie className="w-5 h-5"/> 
                        </div>
                        <span>Dashboards</span>
                    </div>
                    <div className="flex flex-row justify-center items-center px-2 space-x-1">
                        <div className="bg-gray-400 rounded-full p-1">
                            <BadgeDollarSign className="w-5 h-5"/> 
                        </div>
                        <span>Novo Gasto</span>
                    </div>
                </div>
                </Link>
            </div>
        </nav>
    )
}