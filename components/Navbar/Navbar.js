import { useRouter } from "next/router";
import requests from "../../utils/requests";

const Navbar = () => {
    const router = useRouter()
  return (
    <nav className="relative">
      <ul className="flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide">
        {Object.entries(requests).map(([key,{title,url}])=>(
            <li
            onClick={()=>{router.push(`/?genre=${key}`)}}
             className="last:pr-10 cursor-pointer transition duration-100 transform hover:scale-125 text-white active:text-red-500" key={key}>{title}</li>
        ))}
      </ul>
      <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12"/>
    </nav>
  );
};

export default Navbar;
