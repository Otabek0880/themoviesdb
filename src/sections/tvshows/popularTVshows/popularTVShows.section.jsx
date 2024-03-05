

import { api } from "../../../api/api";

import { useEffect, useState } from "react";
import { baseURLImages ,fileSizeImages} from "../../../api/api";


export default function PopularTVShowsSection() {
    const [popularMovies, setPopularMovies] = useState([]);
    

   async function getPopularMovies() {
        const endPoint = "discover/tv";
       await api.get(endPoint).then(response => {
           setPopularMovies(response.data.results)
          
        }).catch(error => {
            console.log(error);
        })

    }

    useEffect(() => {
       getPopularMovies()
   },[])
   
    return (
        <div className="movies">
            {popularMovies.map((item, index) => {
                return (
                    <a href={`/tv/${item.id}`} className="movie_card">
                        <img src={baseURLImages + fileSizeImages + item.poster_path} alt="" />
                        <h2>{item.original_name}</h2>
                        <p>{ item.release_date}</p>
                    </a>
                )
            })}
        </div>
    )
}