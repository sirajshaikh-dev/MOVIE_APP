import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axiosInstance from '../utils/axios'

import Dropdown from './templates/Dropdown'
import Topnav from './templates/Topnav'
import Cards from './templates/Cards'
import Loader from './Loader'

const Trending = () => {
    const navigate = useNavigate()

    const [category, setCategory] = useState("all")
    const [duration, setDuration] = useState("day")
    const [trending, setTrending] = useState(null)

    const getTrending = async () => {
        try {
            const { data } = await axiosInstance.get(`/trending/${category}/${duration}`)
            setTrending(data.results)
        } catch (error) {
            console.log('error', error);
        }
    }

    useEffect(() => {
      getTrending()
    }, [category])

    return trending ? (
        <div className='p-[3%] w-screen h-full overflow-hidden overflow-y-auto'>
            <div className='w-full flex items-center'>
                <h1 className='text-2xl font-semibold text-zinc-400'>
                    <i className="ri-arrow-left-line"
                        onClick={() => navigate(-1)}

                    ></i>
                    Trending
                </h1>
                <Topnav />
                <Dropdown
                    title="Category"
                    options={["movie", "tv", "all"]}
                    setCategory={(e)=>setCategory(e.target.value)}
                />
                <Dropdown
                    title="Duration"
                    options={["day", "week",]}
                    setCategory={(e)=>setDuration(e.target.value)}
                />
            </div>
            
            <Cards data={trending} />
        </div>
    ):(
        <Loader/>
    )
}

export default Trending