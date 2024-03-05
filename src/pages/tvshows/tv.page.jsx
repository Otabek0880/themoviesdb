import PopularTVShowsSection from "../../sections/tvshows/popularTVshows/popularTVShows.section";



export default function TVpage() {
   
    return (
        <section className="movie_content">
            <div className="media">
                <div className="column_wrapper">
                    <div className="content_wrapper">
                        <div className="title">
                            <h2>Popular TV Shows</h2>
                        </div>
                        <div className="content">
                            <div></div>
                            <div className="popularmovie">
                                <PopularTVShowsSection/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       </section>
    )
}