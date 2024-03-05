import { useEffect, useState } from "react"
import "./peole.css"
import { baseURLImages,fileSizeImages } from "../../api/api"
import { api } from "../../api/api"


export default function PeoplePage() {
    const [people, setPeople] = useState([])
    
    
    async function getPeople() {
        const endPoint = "person/popular"
      await  api.get(endPoint).then(response => {
            setPeople(response.data.results)
          
        }).catch(error => {
            console.log(error);
        })
    }
    useEffect(() => {
        getPeople()
    },[])
    return (
        <div className="people_page">
            <div className="people_block">
                <div className="people_content">
                    <div className="pcontent">
                        <h2>Popular people</h2>
                        <div className="people_cards">
                           
                            {people.map((item, index) => {
                                  
                                return (
                                    <div className="people_card">
                                        <a href={`person/${item.id}`}>
                                            <img src={baseURLImages + fileSizeImages + item.profile_path} alt="" height="315" />
                                            <h2>{item.original_name}</h2>
                                            <p>{ item.known_for[0].name + item.known_for[1].original_title + " and " + item.known_for[2].title }</p>
                                        </a>
                                        </div>
                                  )
                              })}
                         
                        </div>
                    </div>
                </div>
            </div>
      </div>
    )
}