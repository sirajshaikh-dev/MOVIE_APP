import { Link } from "react-router-dom"

  
 const Sidenav = () => {
   return (
     <div className='w-[20%] h-auto border-r-2 border-zinc-400 p-10 '>
      <h1 className="text-2xl text-white font-bold">
        <span className=" ">MOVIE APP</span>
      </h1>
      <nav className="flex flex-col text-zinc-400 text-lg  ">
        <h1 className="text-white font-semibold text-xl mt-8 mb-4">New Feeds</h1>
        <Link to={'/trending'} className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3.5" > 
            <i className="ri-fire-fill"></i> Trending
        </Link> 
        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3.5">
          <i className="ri-bard-fill"></i> Popular
        </Link> 
        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3.5">
          <i className="ri-movie-2-fill"> </i>Movies 
        </Link> 
        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3.5">
          <i className="ri-tv-2-fill"> </i> TV shows 
          </Link> 
        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3.5">
          <i className="ri-team-fill"> </i>People 
          </Link> 
      </nav>
      <hr className="border-none mt-2 h-0.5 bg-zinc-500"/>

      <nav className="flex flex-col text-zinc-400 text-lg  ">
        <h1 className="text-white font-semibold text-xl mt-4 mb-4">Information</h1>
        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3.5" > 
            <i className="ri-information-fill"></i> About 
        </Link> 
        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3.5">
          <i className="ri-phone-fill"></i> Contact Us
        </Link> 
      </nav>
     </div>
   )
 }
 
 export default Sidenav