import TopratedMoviesSection from "../../../sections/movie/toprated/toprated.section";


export default function TopRatedPage() {
    return (
        <section className="movie_content">
        <div className="media">
            <div className="column_wrapper">
                <div className="content_wrapper">
                    <div className="title">
                        <h2>Now playing movies</h2>
                    </div>
                    <div className="content">
                        <div></div>
                        <div className="popularmovie">
                            <TopratedMoviesSection/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
   )
}