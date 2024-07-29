import axios from "axios";
import {AddSongDto} from "../../domain/entities/AddSongDto";

class SongService{
    private BASE_URL:string = "http://localhost:8080/api";
    private ENDPOINT:string = "/songs";
    getSongs(){
        const url = this.BASE_URL+this.ENDPOINT;
        return axios.get(url);
    }
    saveSong(newSong:AddSongDto){
        const url = this.BASE_URL + this.ENDPOINT;
        return axios.post(url,newSong);
    }
}
export default new SongService;