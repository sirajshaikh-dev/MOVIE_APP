import React from 'react'
import { Link } from 'react-router-dom';

const Header = ({ data }) => {
    // console.log('wallpaper data in header', data);
    return (
        <div
            style={{
                background: `linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.8)),
                url(https://image.tmdb.org/t/p/original/${data.backdrop_path || data.profile_path})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                width: "100%",
                height: "50vh",
                minHeight: "550px"
            }}
            className="w-full h-[50vh] flex flex-col justify-end items-start p-[5%]"
        >

            <h1 className='w-[70%] text-5xl font-black text-white pb-1.5'>
                {data.name || data.title || data.original_name || data.original_title}
            </h1>
            <p className='w-[70%] text-white '>
                {data.overview.slice(0, 200)} ....
                <Link className='text-blue-400'> more</Link>
            </p>
            <p className='text-white flex gap-1 pt-1.5'>
                <i className='ri-megaphone-fill text-amber-300'></i> {" "} {data.release_date || "Not disclosed"}
                <i className='ri-album-fill text-amber-300 pl-3'></i> {" "} {data.media_type.toUpperCase()}
            </p>
            <Link className='mt-5 bg-[#6556cd] p-4 rounded text-white font-semibold'>
                {""}
                Watch Trailer
            </Link>
        </div>
    )
}

export default Header