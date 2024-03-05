import { useEffect, useState } from "react"
import "./popular.css"
import { api } from "../../../api/api"
import { baseURLImages, fileSizeImages } from "../../../api/api"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
export default function TrendingSection() {
    const [movies, setMovies] = useState([])
    const [endPoint,setEndPoint] = useState("/movie/top_rated")
    
   async  function getTrendingMovies() {
      await  api.get(endPoint).then(response => {
          setMovies(response.data.results)
        })
        .catch(error => {
            console.log("error => ", error);
        })
    }


    useEffect(() => {
        getTrendingMovies()
    },[endPoint])
    
     
    return (
        <>
            <section className="popular">
                <div className="trending_wrapper">
                    <div className="trending_header">
                        <h1>What's Popular</h1>
                        <div className="trending_selector">
                            <div className={`anchor ${(endPoint === "/movie/top_rated") ? 'selected' : '' } `}>
                                <h3 onClick={()=>setEndPoint("/movie/top_rated")}>Streaming</h3>
                            </div>
                            <div className={`anchor ${(endPoint === "/tv/on_the_air") ? 'selected' : '' } `}>
                                <h3 onClick={()=>setEndPoint("/tv/on_the_air")}>On TV</h3>
                            </div>
                            <div className={`anchor ${(endPoint === "/movie/upcoming") ? 'selected' : '' } `}>
                                <h3 onClick={()=>setEndPoint("/movie/upcoming")}>For recent</h3>
                            </div>
                            <div className={`anchor ${(endPoint === "/movie/now_playing") ? 'selected' : '' } `}>
                                <h3 onClick={()=>setEndPoint("/movie/now_playing")}>In theatres</h3>
                            </div>
                        </div>
                      
                    </div>
                    <div className="trending_movies">
                        {
                            movies.map((item, index) => {
                                return (
                                    <a href={endPoint.includes('tv') ? `/tv/${item.id}` :  `/movie/${item.id}`}>
                                        <div className="trending_movie" key={index}>
                                            <img src={baseURLImages + fileSizeImages + item.poster_path} alt="" />
                                            <div className="trending_percent">
                                                <CircularProgressbar styles={buildStyles({ textSize: '30px', trailColor: "yellow", textColor: "white" })} maxValue={10} value={item.vote_average} text={`${(item.vote_average * 10).toFixed(0)}%`} />
                                            </div>
                                            <h3>{endPoint.includes('tv')?item.name:item.title}</h3>
                                            <p>{endPoint.includes('tv')?item.first_air_date : item.release_date}</p>
                                        </div>
                                    </a>
                                )
                            })
                        }
                        </div>
             </div>
      </section>
        </>
    )
}