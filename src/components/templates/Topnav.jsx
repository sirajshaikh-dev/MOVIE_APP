import { Link } from "react-router-dom"

const Topnav = () => {
  return (
    <div className='w-full h-[10vh] relative flex justify-center items-center'>
        <i class="ri-search-line text-3xl text-zinc-400"></i>
        <input 
        className="w-[50%] mx-10 p-5 text-xl outline-none border-none bg-transparent text-zinc-300"
        type='text' 
        placeholder='search'/>
        <i class="ri-close-line text-3xl text-zinc-400"></i>
    
        <div className="absolute w-[50%] h-[50vh] bg-zinc-200 top-[90%] overflow-auto">
            <Link className="font-semibold text-zinc-600 flex w-full p-10 justify-center items-center border-b-2 border-zinc-100 
            hover:text-black hover:bg-zinc-300 duration-300">
            <img src="" alt="" />
            <span>Hello</span>
            </Link>
            <Link className="font-semibold text-zinc-600 flex w-full p-10 justify-center items-center border-b-2 border-zinc-100 
            hover:text-black hover:bg-zinc-300 duration-300">
            <img src="" alt="" />
            <span>Hello</span>
            </Link>
            <Link className="font-semibold text-zinc-600 flex w-full p-10 justify-center items-center border-b-2 border-zinc-100 
            hover:text-black hover:bg-zinc-300 duration-300">
            <img src="" alt="" />
            <span>Hello</span>
            </Link>
            <Link className="font-semibold text-zinc-600 flex w-full p-10 justify-center items-center border-b-2 border-zinc-100 
            hover:text-black hover:bg-zinc-300 duration-300">
            <img src="" alt="" />
            <span>Hello</span>
            </Link>
            <Link className="font-semibold text-zinc-600 flex w-full p-10 justify-center items-center border-b-2 border-zinc-100 
            hover:text-black hover:bg-zinc-300 duration-300">
            <img src="" alt="" />
            <span>Hello</span>
            </Link>
            <Link className="font-semibold text-zinc-600 flex w-full p-10 justify-center items-center border-b-2 border-zinc-100 
            hover:text-black hover:bg-zinc-300 duration-300">
            <img src="" alt="" />
            <span>Hello</span>
            </Link>
            <Link className="font-semibold text-zinc-600 flex w-full p-10 justify-center items-center border-b-2 border-zinc-100 
            hover:text-black hover:bg-zinc-300 duration-300">
            <img src="" alt="" />
            <span>Hello</span>
            </Link>
            <Link className="font-semibold text-zinc-600 flex w-full p-10 justify-center items-center border-b-2 border-zinc-100 
            hover:text-black hover:bg-zinc-300 duration-300">
            <img src="" alt="" />
            <span>Hello</span>
            </Link>
            <Link className="font-semibold text-zinc-600 flex w-full p-10 justify-center items-center border-b-2 border-zinc-100 
            hover:text-black hover:bg-zinc-300 duration-300">
            <img src="" alt="" />
            <span>Hello</span>
            </Link>
        </div>
    </div>
  )
}

export default Topnav