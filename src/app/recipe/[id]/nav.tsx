"use client"
import { useRouter } from "next/navigation"
export default function Nav(){  
    const router = useRouter()
    return <button onClick={()=>router.back()}>retour</button>
}