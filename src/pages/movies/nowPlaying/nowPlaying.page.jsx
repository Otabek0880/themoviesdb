import NowPlayingSection from "../../../sections/movie/nowPlaying/nowPlaying.section";
import "../movie.css"

export default function NowPlayingPage() {
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
                            <NowPlayingSection/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
   )
}