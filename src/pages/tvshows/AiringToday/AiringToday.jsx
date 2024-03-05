import AiringTodaySection from "../../../sections/tvshows/AiringToday/AiringToday";



export default function AiringTodayPage() {
   
    return (
        <section className="movie_content">
            <div className="media">
                <div className="column_wrapper">
                    <div className="content_wrapper">
                        <div className="title">
                            <h2>TV Shows Airing Today</h2>
                        </div>
                        <div className="content">
                            <div></div>
                            <div className="popularmovie">
                                <AiringTodaySection/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       </section>
    )
}