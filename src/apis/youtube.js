import axios from "axios"

const KEY="AIzaSyAHBMu5qoT2cAVpvNRhhfBUi6XHgxSBv8g"

export default axios.create({
    baseURL:"https://youtube.googleapis.com/youtube/v3",
    params:{
        part:'snippet',
        maxResults:5,
        key:KEY,
        type:'video'

    }
})