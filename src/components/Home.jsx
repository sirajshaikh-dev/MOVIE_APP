import Sidenav from './templates/Sidenav'
import Topnav from './templates/Topnav'
import { useEffect, useState } from 'react'
import axiosInstance from '../utils/axios'
import Header from './templates/Header'

function Home() {
  document.title = 'Homepage'

  const [wallpaper, setWallpaper] = useState(null)

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
    !wallpaper && getHeaderWallpaper();
  }, [])

  return wallpaper ? (
    <>
      <Sidenav />
      <div className='w-[80%] h-full '>
        <Topnav />
        <Header data={wallpaper} />
      </div>
    </>
  ) : <h1>Loading ...</h1>
}

export default Home