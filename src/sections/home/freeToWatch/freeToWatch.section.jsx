import { useEffect, useState } from "react"
import { api } from "../../../api/api"
import { baseURLImages, fileSizeImages } from "../../../api/api"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
export default function FreeToWatchSection() {
    const [movies, setMovies] = useState([])
    const [endPoint,setEndPoint] = useState("/movie/now_playing")
    
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
                        <h1>Free To Watch</h1>
                        <div className="trending_selector">
                            <div className={`anchor ${(endPoint === "/movie/now_playing") ? 'selected' : '' } `}>
                                <h3 onClick={()=>setEndPoint("/movie/now_playing")}>Movies</h3>
                            </div>
                            <div className={`anchor ${(endPoint === "/tv/popular") ? 'selected' : '' } `}>
                                <h3 onClick={()=>setEndPoint("/tv/popular")}>TV</h3>
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