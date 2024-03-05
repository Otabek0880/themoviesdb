import { useParams } from "react-router-dom"
import { api, baseURLImages, fileSizeImages } from "../../api/api";
import { useEffect, useState } from "react";
import "./peopleSinglePage.css"

export default function PeopleSinglePage() {
    const [person, setPerson] = useState([])
    const [external, setExternal] = useState(null)
    const [credits,setCredits] = useState([])
    const { id } = useParams();
   

    async function getCredits() {
        const endPoint = `person/${id}/combined_credits`
        await api.get(endPoint).then(response => {
            setCredits(response.data.cast);
        })
    }

    async function getExternal() {
        const endPoint = `person/${id}/external_ids`
      await  api.get(endPoint).then(response => {
            setExternal(response.data)
        })
    }
    async function getPerson() {
        const endPoint = `person/${id}`
      await api.get(endPoint).then(response => {
            setPerson(response.data)
        })
    }
    
    useEffect(() => {
        getPerson()
        getExternal()
        getCredits()
    }, [])

    console.log(credits);
   
    if (!external) return null;
  
    return (
        <div className="singlepeople_page">
             <div className="singlepage_container">
                <div className="first_section">
                    
                    <img className="profile_photo" src={baseURLImages + fileSizeImages + person.profile_path} alt="" />
                    <div className="social_medias">
                        <a href={`https://twitter.com/${external.twitter_id}`}>
                        <img  src="https://www.themoviedb.org/assets/2/v4/glyphicons/social/twitter-a6ff8c172b8e086f4a64578cee0a16676c1a067b47a1b1b186d58795d241a852.svg" alt="" width="30" height="30"/>
                        </a>
                        <a href={`https://instagram.com/${external.instagram_id}`}>
                        <img  src="https://www.themoviedb.org/assets/2/v4/glyphicons/social/instagram-74e6299c864adc384258da3b3a8eb09282b7ccda4dd1dfa9a4158ba2ea8583b9.svg" alt="" width="30" height="30"/>
                        </a>
                        <a href={`https://tiktok.com/${external.tiktok_id}`}>
                        <img  src="https://www.themoviedb.org/assets/2/v4/glyphicons/social/tiktok-69d6a5d09a7fd09b663fa45337fa05cbfc4cbf16b45d72d9962b036a9e2702b4.svg" alt="" width="30" height="30"/>
                       </a>
                     </div>
                    <div className="personal_info">
                        <h1 style={{fontWeight:"600" ,fontSize:"1.3em", marginBottom:8}} >Personal Info:</h1>
                        <h1 style={{fontWeight:"600" ,fontSize:"1em", color:"", marginBottom:10}}>Know for: <br />
                          <span style={{fontWeight:"400"}}>{person.known_for_department}</span>
                        </h1>
                        <h1 style={{fontWeight:"600" ,fontSize:"1em", color:"",marginBottom:10}}>Birthday: <br />
                          <span style={{fontWeight:"400"}}>{person.birthday}</span>
                        </h1>
                        <h1 style={{fontWeight:"600" ,fontSize:"1em", color:"",marginBottom:10}}>Place of birth: <br />
                          <span style={{fontWeight:"400"}}>{person.place_of_birth}</span>
                        </h1>
                        <h1 style={{width:300,fontWeight:"600" ,fontSize:"1em", color:"",marginBottom:10}}>Also Known As: <br />
                          <span style={{fontWeight:"400"}}>{person.also_known_as}</span>
                       </h1>
                    </div>
                
            </div>
                <div className="second_section">
                    <h1>
                        <a href={`/person/${person.id}`}>{ person.name}</a>
                    </h1>
                    <h3 style={{ fontWeight: "600", fontSize: "1.3em", marginBottom: 8 }}>Biography</h3>
                    <p style={{ width: 800 , marginBottom:30}}>{person.biography}</p>
                    
                    <h1 style={{ fontWeight: "600", fontSize: "1.3em", marginBottom: 8 }}>Know for</h1>
                    <div className="credits">
                        {credits.map((item, index) => {
                            return (
                                <a href={`/movie/${item.id}`}>
                                       <div key={index}>
                                    <img src={baseURLImages + fileSizeImages + item.poster_path} alt="" width="130" height="195" />
                                    <p>{ item.title}</p>
                                </div>
                             </a>
                            )
                        })}
                    </div>

            </div>
        </div>
        </div>
    )
}