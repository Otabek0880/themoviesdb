import { useLocation } from "react-router-dom"
import { api, baseURLImages, fileSizeImages } from "../../api/api";
import { useEffect, useState } from "react";
import "./search.css"
export default function SearchPage() {
    const [items,setItems] = useState([])

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search)
    const queryParam = searchParams.get('value')
   async function getItems() {
       await api.get(`/search/movie?query=${queryParam}`).then(response => {
           console.log(response.data.results);
           setItems(response.data.results)
        })
    }
    useEffect(() => {
        getItems()
    },[])
    return (
        <>
            <div className="search_page">
                <div className="search_results">
                    
                    {items.map((item, index) => {
                        return (
                            <a href={`/movie/${item.id}`}>
                                <div className="cart_result" key={index}>
                                    <div className="search_cart_img">
                                        <img src={baseURLImages+fileSizeImages+item.poster_path} alt="" width="94" height="141"/>
                                    </div>
                                    <div className="details">
                                        <h2>{item.title}</h2>
                                        <p>{item.release_date}</p>
                                        <h3>{ item.overview}</h3>
                                    </div>
                                </div>
                            </a>
                        )
                    })}
                </div>
         </div>
        </>
    )
}