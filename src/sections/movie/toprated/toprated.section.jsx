import { api } from "../../../api/api";
import { useEffect, useState } from "react";
import { baseURLImages, fileSizeImages } from "../../../api/api";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


export default function TopratedMoviesSection() {
    const [popularMovies, setPopularMovies] = useState([]);
    

   async function getPopularMovies() {
        const endPoint = "movie/top_rated";
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
                    <a href={`/movie/${item.id}`} className="movie_card">
                        <img src={baseURLImages + fileSizeImages + item.poster_path} alt="" />
                        <div className="percent">
                        <CircularProgressbar styles={buildStyles({trailColor:"yellow",backgroundColor:"black",textColor:"white"})} maxValue={10} value={item.vote_average} text={`${(item.vote_average*10).toFixed(0)}%`}  />;
                        </div>
                        <h2>{item.original_title}</h2>
                        <p>{ item.release_date}</p>
                    </a>
                )
            })}
        </div>
    )
}