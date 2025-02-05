import { Link } from "react-router-dom"

  
 const Sidenav = () => {
   return (
     <div className='w-[20%] h-full border-r-2 border-zinc-400  p-10'>
      <h1 className="text-2xl text-white font-bold">
        <i class="ri-tv-fill text-[#6556CD] mr-2"></i>
        <span className=" ">MOVIE APP</span>
      </h1>
      <nav className="flex flex-col text-zinc-400 text-lg  ">
        <h1 className="text-white font-semibold text-xl mt-8 mb-4">New Feeds</h1>
        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3.5" > 
            <i class="ri-fire-fill"></i> Trending
        </Link> 
        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3.5">
          <i class="ri-bard-fill"></i> Popular
        </Link> 
        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3.5">
          <i class="ri-movie-2-fill"> </i>Movies 
        </Link> 
        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3.5">
          <i class="ri-tv-2-fill"> </i> TV shows 
          </Link> 
        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3.5">
          <i class="ri-team-fill"> </i>People 
          </Link> 
      </nav>
      <hr className="border-none mt-2 h-0.5 bg-zinc-500"/>

      <nav className="flex flex-col text-zinc-400 text-lg  ">
        <h1 className="text-white font-semibold text-xl mt-4 mb-4">Information</h1>
        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3.5" > 
            <i className="ri-information-fill"></i> About 
        </Link> 
        <Link class="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3.5">
          <i class="ri-phone-fill"></i> Contact Us
        </Link> 
      </nav>
     </div>
   )
 }
 
 export default Sidenav