import { useState,useEffect } from "react";
import "./navbar.css"
export default function NavbarSection() {

    const [scrollPosition, setScrollPosition] = useState(0);
    const [scrollDirection, setScrollDirection] = useState('down');
    
    useEffect(() => {
        const handleScroll = () => {
          const currentPosition = window.pageYOffset;
          
          if (currentPosition > scrollPosition) {
            setScrollDirection('down');
          } else {
            setScrollDirection('up');
          }
    
          setScrollPosition(currentPosition);
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollPosition]);
    const headerStyle = {
        transition: 'transform 300ms ease-in-out',
        transform: scrollDirection === 'down' ? 'translateY(-100%)' : 'translateY(0)',
      };
    return (
        <div className="header">
            <div className="sub_media">
                <div className="nav_wrapper">
                    <a className="logo" href="/" >
                      <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" alt="" width="154" height="20"/>
                    </a>
                    <ul className="drop_down">
                        <li className="dropdown">
                            <a className="movie_link  dropdown_button"  role="button" aria-expanded="false">
                                Movies
                            </a>
                            <ul class="dropdown-content">
                                <li><a style={{color:"black"}} class="dropdown-item" href="/movie">Popular</a></li>
                                <li><a style={{color:"black"}} class="dropdown-item" href="/movie/now_playing">Now playing</a></li>
                                <li><a style={{ color: "black" }} class="dropdown-item" href="/movie/upcoming">Upcoming</a></li>
                                <li><a style={{color:"black"}} class="dropdown-item" href="/movie/top_rated">Top rated</a></li>
                           </ul>
                        </li>
                        <li className="dropdown">
                            <a className="TV_link dropdown_button">
                                TV Shows
                            </a>
                            <ul class="dropdown-content">
                                <li><a style={{color:"black"}} class="dropdown-item" href="/tv">Popular</a></li>
                                <li><a style={{color:"black"}} class="dropdown-item" href="/tv/airing_today">Airing Today</a></li>
                                <li><a style={{ color: "black" }} class="dropdown-item" href="/tv/on-the-air">On TV</a></li>
                                <li><a style={{color:"black"}} class="dropdown-item" href="/tv/top-rated">Top rated</a></li>
                           </ul>
                        </li>
                        <li className="dropdown">
                            <a className="people_link dropdown_button" href="/person">
                                People
                            </a>
                            <ul class="dropdown-content">
                                <li><a style={{color:"black"}} class="dropdown-item" href="/person">Popular People</a></li>
                        
                           </ul>
                        </li>
                        <li>
                            <a className="more_link" href="#">
                                More
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="flex">
                    <ul className="primary">
                        <li>
                            <a href="#" alt="image">
                                <img src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-371-plus-white-0bac34f16124808a12ea863b4d9cc6e599dee7c0a80658cfe9ead26939e64517.svg" alt="" width="22" height="22" />
                            </a>
                        </li>
                        <li className="translate">
                            <div>en</div>
                        </li>
                        <li className="login">
                            <a href="#">Login</a>
                        </li>
                        <li className="join">
                            <a href="#">Join TMDB</a>
                        </li>
                        <li className="search">
                            <a href="#">
                                <img src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-28-search-blue-177462d06db81ff2a02aa022c1c0be5ba4200d7bd3f51091ed9298980e3a26a1.svg" alt="" width="30" height="30" />
                            </a>
                        </li>
                    </ul>
                </div>
           </div>
        </div>
    )
}