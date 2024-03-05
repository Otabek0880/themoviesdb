import { useEffect, useState } from "react"
import "./singleMovie.css"
import { useParams } from "react-router-dom";
import { api, baseURLImages, fileSizeImages } from "../../../api/api";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function MovieSinglePage() {
   const {id} = useParams() 
    const [movie, setMovie] = useState([]);
    const [credits,setCredits] = useState([])
    async function getCredits() {
        const endPoint = `movie/${id}/credits`
        api.get(endPoint).then(response => {
            setCredits(response.data.cast)
        })
    } 
   

    async function getMovie() {
        const endPoint = `movie/${id}`
        api.get(endPoint).then(response => {
            setMovie(response.data)
           
        })
    }

    useEffect(() => {
        getMovie()
        getCredits()
    },[])
    console.log(movie);
    return (

    
        <div className="movie_singlepage">
            <div className="keyboard" style={{ backgroundImage: ` linear-gradient(rgba(20, 0, 20, 0.7), rgba(44, 46, 48, 0.6)),url(${baseURLImages + 'w1920_and_h800_multi_faces' + movie.backdrop_path})` }}>
                <div className="image_part">
                    <img src={baseURLImages + fileSizeImages + movie.poster_path} width="300" height="450" alt="" />
                </div>
                <div className="header_poster">
                    <h1>{movie.title}</h1>
                    <div className="facts">
                        <p className="release">{movie.release_date}</p>
                      
                        {/* <p className="genres">{movie.genres.map((item, index) => {
                            return (
                                <div key={index}>
                                    {item.name}
                                </div>
                            )
                        })}</p> */}
                    </div>
                    <div className="actions">
                        <div className="action_percent">
                            <div className="percentt">  <CircularProgressbar styles={buildStyles({textSize:'30px', trailColor: "yellow", backgroundColor: "yellow", textColor: "white" })}  maxValue={10} value={movie.vote_average} text={`${(movie.vote_average * 10).toFixed(0)}%`} /></div>
                            <p>User <br /> Score</p>
                            <div className="tooltip">
                                <img src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-159-thumbnails-list-white-c260ea972eebf812289fd3c41d0d2c1dff33ecbcd62be13fba8eeaf9de173789.svg" alt="" width="16" height="16" />
                            </div>
                            <div className="favourite">
                                <img src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-13-heart-white-28d2cc2d6418c5047efcfd2438bfc5d109192671263c270993c05f130cc4584e.svg" alt="" width="16" height="16"/>
                            </div>
                            <div className="watchlist">
                                <img src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-73-bookmark-white-432e98d550b7e4c80b06272c49475b0db85a60f6fae450420713004b3c9d3ffd.svg" alt="" width="16" height="16" />
                            </div>
                            <div className="rate">
                                <img src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-49-star-white-5c85220678b312aea9599d5f12ad858a9e7df226de51ef8b6b699023ffeda5fa.svg" alt="" width="16" height="16" />
                            </div>
                            <h3>
                                <a href={`https://www.youtube.com/${movie.title}`}>Play Trailer</a>
                            </h3>
                        </div>
                        <div className="header_info">
                            <h2 style={{ color: "white", fontWeight: 600, fontSize: '1.3em' }}>Overview</h2>
                            <p style={{ width: 980, fontSize: 16, color: "#fff", marginTop: 8 }}>{movie.overview}</p>
                            <div className="people">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="media">
                <div className="media_wrapper">
                    <h3>Top Billed Cast</h3>
                    <div style={{width:1022}} className="movie_credits">
                        {credits.map((item, index) => {
                            return (
                                <a href={`/person/${item.id}`}>
                                    <div className="movie_credit">
                                        <img src={`${baseURLImages + fileSizeImages + item.profile_path}`} alt="" width="138" height="175" />
                                        <h2 style={{fontWeight:700,fontSize:16,paddingTop:10,paddingLeft:10,color:"#000" ,textAlign:"start"}}>{item.name}</h2>
                                        <p style={{color:"#000",fontSize:'.9em',paddingLeft:10}}>{ item.character}</p>
                                     </div>
                             </a>
                          )
                      })}
                    </div>
                </div>
                <div className="grey_column">
                    <img src="https://www.themoviedb.org/assets/2/v4/logos/justwatch-small-grey-b589701cfd61de942e17ae33c34a7c939a1218595df3d8744c16a5612f0fd6f7.svg" alt="" width="30" height="30" />
                 
                    <h2>Status
                        <p>{movie.status}</p>
                        
                    </h2>
                    <h2>Original language
                        <p>{movie.original_language}</p>
                        
                    </h2>
                    <h2>Budget
                        <p>{movie.budget}</p>
                        
                    </h2>
                    <h2>Budget
                        <p>{movie.revenue}</p>
                        
                    </h2>
                    
                </div>
            </div>
        </div>
    )
}