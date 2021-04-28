
import React from 'react';



const VideoDetail = ({vid}) => {


    if(!vid){
        return <h3>Loading ...</h3>
    }

    const vidSrc=`https://www.youtube.com/embed/${vid.id.videoId}`

    return (
       
        <div>

            <div className="ui embed">
                <iframe title="vid player" src={vidSrc}  />
            </div>


            <div className="ui segment">
                <h4 className="ui header">{vid.snippet.title}</h4>
                <p className="ui description">{vid.snippet.description}</p>
            </div>
        </div>
    )
}

export default VideoDetail
