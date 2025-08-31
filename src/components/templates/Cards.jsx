import { Link } from 'react-router-dom'

// this is trending page Card
const Cards = ({ data }) => {
    console.log('data from Trending compo', data);
    return (
        <div className='flex flex-wrap w-full '>
            {
                data.map((d, i) => (
                    <Link className='w-[25vh] mr-[5%] mb-[5%]' key={i}>
                        <img className='h-[40vh] object-cover'
                            src={`https://image.tmdb.org/t/p/original/${d.backdrop_path || d.profile_path}`}
                            alt=''
                        />

                        <h1 className='text-2xl text-zinc-400 mt-3 font-semibold'>
                            {d.name || d.title || d.original_name || d.original_title}

                        </h1>
                    </Link>
                ))
            }
        </div>
    )
}

export default Cards