import { ThumbUpIcon } from "@heroicons/react/outline"
import Image from "next/image"


const Thumbnail = ({result}) => {
  return (
    <li className="group cursor-pointer">
        <Image 
            layout="responsive"
            height={1080}
            width={1920}
            src={`https://image.tmdb.org/t/p/original/${result.backdrop_path || result.poster_path}`}
        />
        <div className="p-2">
            <p className="truncate max-w-md">{result.overview}</p>
            <h2 className="mt-1 text-2xl text-white transition-all duration-150 ease-in-out group-hover:font-bold">{result.title || result.original_name}</h2>
            <p className="opacity-0 group-hover:opacity-100">
                {result.media_type && `${result.media_type} • `}{" "}
                {result.release_date || result.first_air_date}{" "}
                <ThumbUpIcon className="h-5 mx-2"/> {result.vote_count}
            </p>
        </div>
    </li>
  )
}

export default Thumbnail