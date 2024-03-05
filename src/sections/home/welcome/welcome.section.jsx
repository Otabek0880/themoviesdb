import React, { useRef } from "react"
import "./welcome.css"
import { useNavigate } from "react-router-dom"
export default function Welcome() {
    
    const navigate = useNavigate()
    const searchKey = useRef() 
    function searchItem() {
        navigate({
            pathname: "/search",
            search:`value=${searchKey.current.value}`
        })
    }

    return (
        <div className="welcome">
            <div className="welcome_container">
                <div className="welcome_bg_img">
                    <div className="welcome_wrapper">
                        <div className="welcome_title">
                            <h1>Welcome.</h1>
                            <h3>Millions of movies, TV shows and people to discover. Explore now.</h3>
                        </div>
                        <div className="welcome_search">
                            <input ref={searchKey} type="text" placeholder="Search for a movie, tv show, person......" />
                            <button onClick={searchItem}>Search</button>
                           
                        </div>
                    </div>
                </div>
            </div>
           </div>
    )
}