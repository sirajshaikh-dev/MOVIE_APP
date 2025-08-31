import Dropdown from "./Dropdown";

const TrendingHeader = ({ setCategory }) => {
    return (
        <div className="flex justify-between items-center">
            <h1 className='p-2 font-bold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-zinc-300 via-zinc-200 to-zinc-400'>
                Trending🔥
            </h1>
            <Dropdown
                title={"Choose Category"}
                options={['tv', 'movie', 'all']}
                setCategory={setCategory} />
        </div>
    );
};
export default TrendingHeader
