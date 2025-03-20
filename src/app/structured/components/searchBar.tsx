import SearchIcon from "./icons/searchIcon";
export default function SearchBar(){
    return (
        <>
            <div className=" bg-white flex py-2 px-4 rounded-lg text-sm w-72">
                <input type="text" className="focus:outline-none flex-1" name="search" id="search" placeholder="Search recipes..."/> <label htmlFor=""><SearchIcon/></label>
            </div>
        </>
    );
}