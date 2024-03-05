import "./trailers.css"
import { useState } from "react"


export default function TrailersSection() {
    const [selectedType, setSelectedType] = useState('popular')
   
    return (
        <div className="trailer">
            <div className="tcolumn_header">
                <h2>Lates Trailers</h2>
                <div className="selector_wrap">
                <div className="tselector">
                                        <div className={`anchor ${(selectedType === "popular") ? 'selected' : ''}`}>
                                            <h3 onClick={()=>setSelectedType("popular")}>
                                                Popular
                                                <span className="glyphicons_v2 chevron-down"></span>
                                                
                                               
                                            </h3>
            
                                            
                                        </div>
                                        <div className={`anchor ${(selectedType === "streaming") ? 'selected' : ''}`}>
                                            <h3 onClick={()=>setSelectedType("streaming")}>
                                               Streaming
                                                <span className="glyphicons_v2 chevron-down"></span>
                    
                                            </h3>
                        </div>
                                   <div className={`anchor ${(selectedType === "ontv") ? 'selected' : ''}`}>
                                            <h3 onClick={()=>setSelectedType("ontv")}>
                                               On TV
                                                <span className="glyphicons_v2 chevron-down"></span>
                    
                                            </h3>
                        </div>
                        <div className={`anchor ${(selectedType === "forrecent") ? 'selected' : ''}`}>
                                            <h3 onClick={()=>setSelectedType("forrecent")}>
                                               For recent
                                                <span className="glyphicons_v2 chevron-down"></span>
                    
                                            </h3>
                        </div>
                        <div className={`anchor ${(selectedType === "intheatres") ? 'selected' : ''}`}>
                                            <h3 onClick={()=>setSelectedType("intheatres")}>
                                               In theatres
                                                <span className="glyphicons_v2 chevron-down"></span>
                    
                                            </h3>
                                        </div>
                                    </div>
                </div>
          </div>
      </div>
    )
}