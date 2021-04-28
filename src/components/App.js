import React,{useState} from "react";
import youtube from "../apis/youtube";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";




const App=() =>{

  const[videos,setVideos]=useState([])
  const[selectedVid,setSelectedVid]=useState(null)
  const onTermSubmit=async term=>{
    
    const resp= await youtube.get("/search",{
      params:{
        q:term
      }
    })
    setVideos(resp.data.items)

  }

  const onVideoSelect=video=>{
    console.log("From the app",video);
  }

  return (
    <div className="ui container">
      <SearchBar onTermSubmit={onTermSubmit}/>
      <VideoList videos={videos} onVideoSelect={onVideoSelect}/>
    </div>
  );
}

export default App;
