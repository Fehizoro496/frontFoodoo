import Link from 'next/link'
export default function Page(){
    return <>
        <div className="bg-amber-200 w-screen h-screen relative grid grid-cols-8 grid-rows-12">
            
            {/* background */}
            <div className="absolute w-screen inset-0 border-t-[100vh] border-b-0 border-l-[50vw] border-solid border-transparent border-t-amber-100 left-1/4"></div>
            
            {/* the left part */}
            <form className="col-span-3 row-span-10 row-start-2 z-10 bg-white rounded-r-sm flex flex-col items-center px-10 justify-center gap-6" action="" method="get">
                    <div>Foodoo</div>
                    <div className="flex flex-col w-full">
                        <label htmlFor="username">Username</label>
                        <input className="border-2 p-2" type="text" name="username" id="username" />
                    </div>
                    <div className="flex flex-col w-full">
                        <label htmlFor="email">Email</label>
                        <input className="border-2 p-2" type="text" name="email" id="email" />
                    </div>
                    <div className="flex flex-col w-full">
                        <label htmlFor="password">Password</label>
                        <input className="border-2 p-2" type="password" name="password" id="password" />
                    </div>
                    <Link href={'/login'} className='bg-amber-300 text-white w-full text-center'>
                        <input type="submit" value="Signup" className="p-2" />
                    </Link>
                    <div>Already have an account? <Link href={"/login"} className="text-amber-300">Login</Link></div>
            </form>

            {/* the right part */}
            <div className="col-span-3 row-span-10 row-start-2 col-start-2 z-10 bg-amber-300 rounded-l-sm">
                
            </div>
        
        </div>
    </>
}