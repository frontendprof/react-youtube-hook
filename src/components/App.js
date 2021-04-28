import React,{useState,useEffect} from "react";
import youtube from "../apis/youtube";
import SearchBar from "./SearchBar/SearchBar";
import VideoDetail from "./VideoDetail";
import VideoList from "./VideoList";




const App=() =>{

  const[videos,setVideos]=useState([])
  const[selectedVid,setSelectedVid]=useState(null)

  useEffect(()=>{
    onTermSubmit("buildings")
  },[])


  const onTermSubmit=async term=>{
    
    const resp= await youtube.get("/search",{
      params:{
        q:term
      }
    })
    setVideos(resp.data.items)
    setSelectedVid(resp.data.items[0])

  }

  const onVideoSelect=video=>{
    setSelectedVid(video)
  }

  return (
    <div className="ui container">
      <SearchBar onTermSubmit={onTermSubmit}/>

      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">

            <VideoDetail vid={selectedVid}/>
          </div>

          <div className="five wide column">

            <VideoList videos={videos} onVideoSelect={onVideoSelect}/>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
