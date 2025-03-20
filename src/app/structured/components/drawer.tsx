"use client"
import React from 'react'
import HomeIcon from './icons/homeIcon';
import HeartIcon from './icons/heartIcon';
import BookmarkIcon from './icons/bookmarkIcon';    
import Image from 'next/image';
import fehizoro from '../../../../public/fehizoro.png';
import illustration from '../../../../public/illustration.jpg';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function Avatar(){
    return  <div className="rounded-full border-4 border-amber-400 bg-amber-100 w-24 h-24 grid place-content-center shadow-lg overflow-clip">
                <Image style={{minHeight:'100%',minWidth:'100%',objectFit:'cover'}} src={fehizoro} alt={`Fehizoro's pic`}/>
            </div>
}

export default function Drawer(){
    // const router = useRouter()
    let pathName =  usePathname()
    const activedStyle = "border-amber-400 border bg-amber-400 shadow-md shadow-amber-200"
    const notActivedStyle = "border-slate-300 border text-gray-400 hover:border-amber-100 hover:bg-amber-100 hover:text-gray-500"
    
    return(<>
        <div className="col-span-2 h-auto flex flex-col items-center content-between bg-white rounded-lg">
            <div className="flex flex-col items-center">
                <div className="text-2xl font-black m-5">Foodoo</div>
                <div className="flex flex-col items-center gap-2 m-3">
                    <Avatar/>
                    <h1 className="font-bold">Fehizoro Andrian.</h1>
                </div>
            </div>
                
            <ul className="flex-1 flex flex-col justify-center gap-2 w-full px-5 text-sm">
                <Link href={'/structured/home'}>
                    <li className={`${pathName=="/structured/home"?activedStyle:notActivedStyle} px-6 py-2 flex items-center gap-3 rounded-lg font-bold cursor-pointer`}>
                        <HomeIcon/>
                        <span className='self-end'>Home</span>
                    </li>
                </Link>

                <Link href={'/structured/favorites'}>
                <li className={`${pathName=="/structured/favorites"?activedStyle:notActivedStyle} px-6 py-2 flex items-center gap-3 rounded-lg font-bold cursor-pointer`}>
                        <HeartIcon fillColor={false}/>
                        <span className='self-end'>Favorites</span>
                    </li>
                </Link>

                <Link href={'/structured/myRecipes'}>
                <li className={`${pathName=="/structured/myRecipes"?activedStyle:notActivedStyle} px-6 py-2 flex items-center gap-3 rounded-lg font-bold cursor-pointer`}>
                        <BookmarkIcon/>
                        <span className='self-end'>My recipes</span>
                    </li>
                </Link>
            </ul>
            
            <div className="w-full h-fit">
                {/* sary */}
                <Image src={illustration} style={{minHeight:'100%',minWidth:'100%', objectFit:'cover', opacity:'.8'}}  className='rounded-lg' alt='sakafo' />
            </div>
        </div>
    </>);
}