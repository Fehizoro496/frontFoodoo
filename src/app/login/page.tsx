"use client"

import Link from 'next/link'
import { useState } from 'react'
import { useAuth } from '../context/authContext'
import { useRouter } from 'next/navigation'


export default function Page(){
    const {login} = useAuth()
    const router = useRouter()

    const [email,setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error,setError] = useState('')
    
    const handleLogin = async (e: React.FormEvent) => {
        
        e.preventDefault()
        setError('')

        try {
            login(email,password).then(()=>{
                    console.log('go to home');
                    router.push("/structured/home")
                }
            )
            
        } catch (error) {
            setError('Y a eu une erreur!')
        }

    }

    return <>
        <div className="bg-amber-100 w-screen h-screen relative grid grid-cols-8 grid-rows-12">
            
            {/* background */}
            <div className="absolute w-screen inset-0 border-t-[100vh] border-b-0 border-l-[50vw] border-solid border-transparent border-t-amber-200 left-1/4"></div>
            
            {/* the left part */}
            <form onSubmit={handleLogin} className="col-span-3 row-span-10 col-start-2 row-start-2 z-10 bg-white rounded-r-sm flex flex-col items-center px-10 justify-center gap-10" action="" method="get">
                    <div>Foodoo</div>
                    <div className="flex flex-col w-full">
                        <label htmlFor="email">Email</label>
                        <input required className="border-2 p-2" type="text" name="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    </div>
                    <div className="flex flex-col w-full">
                        <label htmlFor="password">Password</label>
                        <input required className="border-2 p-2" type="password" name="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    </div>
                    <div className='bg-amber-300 text-white w-full text-center'>
                        <input type="submit" value="Login" className="p-2" />
                    </div>
                    <div>Doesn't have an account? <Link href={"/signup"} className="text-amber-300">Signup</Link></div>
            </form>

            {/* the right part */}
            <div className="col-span-3 row-span-10 row-start-2 z-10 bg-amber-300 rounded-l-sm">
                
            </div>
        
        </div>
    </>
}