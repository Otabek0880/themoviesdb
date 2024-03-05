import OnTVSection from "../../../sections/tvshows/onTV/onTV.section";




export default function OnTVPage() {
   
    return (
        <section className="movie_content">
            <div className="media">
                <div className="column_wrapper">
                    <div className="content_wrapper">
                        <div className="title">
                            <h2>Currently Airing TV Shows</h2>
                        </div>
                        <div className="content">
                            <div></div>
                            <div className="popularmovie">
                                <OnTVSection/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       </section>
    )
}