import SearchBar from "./searchBar";
import ParamsIcon from "./icons/paramsIcon";
import Link from 'next/link'

export default function Navbar(){
    return(<>
        {/* <div className="row-span-1 flex justify-between bg-white rounded-lg bg-opacity-70 px-3 py-3 h-max items-center">
            <div className="logo">Logo</div>
            <div className="">
                <ul className="inline-flex">
                    <li className="px-5 py-3">Home</li>
                    <li className="px-5 py-3">Category</li>
                    <li className="px-5 py-3">Favorite</li>
                </ul>
            </div>
            <button type="button" className="bg-red-400 text-white px-5 py-3 rounded-md">Log out</button>
        </div> */}
        <div className="flex justify-between px-5 py-4 items-center">
            <SearchBar/>
            <div className="flex items-center gap-5">
                <ParamsIcon/>
                <Link href={'/login'}>
                    <button type="button" className="bg-amber-400 text-md font-bold px-8 py-2 rounded-md">Log out</button>
                </Link>
            </div>
        </div>
    </>);
}