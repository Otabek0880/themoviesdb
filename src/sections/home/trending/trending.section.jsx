import { useEffect, useState } from "react"
import "./trending.css"
import { api } from "../../../api/api"
import { baseURLImages, fileSizeImages } from "../../../api/api"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
export default function TrendingSection() {
    const [movies, SetMovies] = useState([])
    const [selectedType, setSelectedType] = useState('day')
    
   async  function getTrendingMovies() {
        const endPoint = `trending/movie/${selectedType}?language=en-US`
      await  api.get(endPoint).then(response => {
            SetMovies(response.data.results)
        })
        .catch(error => {
            console.log("error => ", error);
        })
    }


    useEffect(() => {
        getTrendingMovies()
    },[selectedType])
  
    return (
        <>
            <section className="trending">
                <div className="trending_wrapper">
                    <div className="trending_header">
                        <h1>Trending</h1>
                        <div className="trending_selector">
                            <div className={`anchor ${(selectedType === "day") ? 'selected' : '' } `}>
                                <h3 onClick={()=>setSelectedType("day")}>Today</h3>
                            </div>
                            <div className={`anchor ${(selectedType === "week") ? 'selected' : '' } `}>
                                <h3 onClick={()=>setSelectedType("week")}>This week</h3>
                            </div>
                        </div>
                      
                    </div>
                    <div className="trending_movies">
                            {movies.map((item, index) => {
                                return (
                                    <a href={`/movie/${item.id}`}>
                                         <div className="trending_movie" key={index}>
                                            <img src={baseURLImages + fileSizeImages + item.poster_path} alt="" />
                                            <div className="trending_percent">
                                                <CircularProgressbar styles={buildStyles({ textSize: '30px', trailColor: "yellow", textColor: "white" })} maxValue={10} value={item.vote_average} text={`${(item.vote_average * 10).toFixed(0)}%`} />
                                            </div>
                                            <h3>{item.title}</h3>
                                            <p>{ item.release_date}</p>
                                    </div>
                                   </a>
                                )
                            })}
                        </div>
             </div>
      </section>
        </>
    )
}