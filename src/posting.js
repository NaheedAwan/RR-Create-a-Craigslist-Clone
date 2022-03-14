import React from "react"
// const craigPost = require('./postings')

// let postList = craigPost.postings.map((data, i) => {
//     return <Posting data={data} key={i} />
// })
 function Posting(props){
     return (
        <div className="posting">
        <h1>{props.posting.title}</h1>
        <p>{props.posting.description}</p>
        <img src={props.posting.imageURL} alt={props.posting.title} />
    </div>
     )
 }
 export default Posting