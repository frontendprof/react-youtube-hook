import React,{useState} from "react";
import youtube from "../apis/youtube";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";




const App=() =>{

  const[videos,setVideos]=useState([])
  const onTermSubmit=async term=>{
    
    const resp= await youtube.get("/search",{
      params:{
        q:term
      }
    })
    console.log(resp.data.items);
    setVideos(resp.data.items)

  }

  return (
    <div className="ui container">
      <SearchBar onTermSubmit={onTermSubmit}/>
      <VideoList videos={videos}/>
    </div>
  );
}

export default App;
