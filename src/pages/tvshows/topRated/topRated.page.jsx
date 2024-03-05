import TopRatedSection from "../../../sections/tvshows/topRated/topRated.section";



export default function TopRatedPage() {
   
    return (
        <section className="movie_content">
            <div className="media">
                <div className="column_wrapper">
                    <div className="content_wrapper">
                        <div className="title">
                            <h2>Top Rated TV Shows</h2>
                        </div>
                        <div className="content">
                            <div></div>
                            <div className="popularmovie">
                                <TopRatedSection/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       </section>
    )
}