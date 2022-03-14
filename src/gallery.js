import React from "react"
import {postings} from "./postings.js"
import Posting from "./posting"

 function Gallery(props){
    return (
        
    <div className="gallery">
        {postings.map((post, index)=>{
            return <Posting posting={post} key={index}/>
        })}
    </div>

        
    )
}
 export default Gallery




 //         {postings.map((posting, index)=>{
//  return(
//      <Posting posting={post} key={i}/>
//  )
//         })}