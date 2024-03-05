import UpcomingMoviesSection from "../../../sections/movie/upcoming/upcoming.section";


export default function UpcomingPage() {
    return (
        <section className="movie_content">
        <div className="media">
            <div className="column_wrapper">
                <div className="content_wrapper">
                    <div className="title">
                        <h2>Upcoming movies</h2>
                    </div>
                    <div className="content">
                        <div></div>
                        <div className="popularmovie">
                            <UpcomingMoviesSection/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
   )
}