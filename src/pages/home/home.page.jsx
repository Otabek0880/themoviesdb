import React from "react"
import Welcome from "../../sections/home/welcome/welcome.section"
import TrendingSection from "../../sections/home/trending/trending.section"
import TrailersSection from "../../sections/home/trailers/trailers.section"
import PopularSection from "../../sections/home/popular/popular.section"
import FreeToWatchSection from "../../sections/home/freeToWatch/freeToWatch.section"
import JoinSection from "../../sections/home/join/join.section"
import LeaderboardSection from "../../sections/home/leaderboard/leaderboard.section"
import "./home.css"

function HomePage() {
    return (
        <div className="main">
            <Welcome />
            <TrendingSection />
            <PopularSection />
            <FreeToWatchSection />
            {/* <TrailersSection />
           
          
            <JoinSection />
            <LeaderboardSection/> */}
        </div>
    )
}

export default HomePage