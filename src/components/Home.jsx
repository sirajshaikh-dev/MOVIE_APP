import { useEffect, useState } from 'react'
import axiosInstance from '../utils/axios'

import Sidenav from './templates/Sidenav'
import Topnav from './templates/Topnav'
import Header from './templates/Header'
import HorizontalCard from './templates/HorizontalCard'
import TrendingHeader from './templates/TrendingHeader'
import Loader from './Loader'

function Home() {
  document.title = 'MOVIE APP'

  const [wallpaper, setWallpaper] = useState(null)
  const [trendingMovies, setTrendingMovies] = useState(null)
  const [category, setCategory] = useState("all")

  const getTrendingMovies = async () => {
    try {
      const { data } = await axiosInstance.get(`/trending/${category}/day`)
      const res = data.results
      setTrendingMovies(res)

    } catch (error) {
      console.error('Error getting trending Movies', error);
    }
  }

  console.log("trendingMovies", trendingMovies);
  // getTrendingMovies() 

  const getHeaderWallpaper = async () => {
    try {
      const { data } = await axiosInstance.get(`/trending/all/day`)
      let randomWallpaper = data.results[(Math.random() * data.results.length).toFixed()]
      setWallpaper(randomWallpaper)
    } catch (error) {
      console.error('Error getting header wallpaper', error);
    }
  }
  console.log("wallpaper:", wallpaper);

  useEffect(() => {
    getTrendingMovies();
    !wallpaper && getHeaderWallpaper();
  }, [category])

  return wallpaper && trendingMovies ? (
    <>
      <Sidenav />
      <div className='w-[80%] h-full '>
        <Topnav />
        <Header data={wallpaper} />
        <TrendingHeader setCategory={(e)=>setCategory(e.target.value)}/>
        <HorizontalCard trendingMovies={trendingMovies} />
      </div>
    </>
  ) : <h1><Loader/></h1>
}

export default Home