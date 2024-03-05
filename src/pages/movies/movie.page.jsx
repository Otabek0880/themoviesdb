
import PopularMoviesSection from "../../sections/movie/popularMovie/popular.section"
import "./movie.css"



export default function MoviePage() {
   
    return (
        <section className="movie_content">
            <div className="media">
                <div className="column_wrapper">
                    <div className="content_wrapper">
                        <div className="title">
                            <h2>Popular Movies</h2>
                        </div>
                        <div className="content">
                            <div></div>
                            <div className="popularmovie">
                                <PopularMoviesSection/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       </section>
    )
}