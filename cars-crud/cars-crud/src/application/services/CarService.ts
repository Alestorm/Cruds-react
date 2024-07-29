import axios from "axios";
import NewCarDto from "../dtos/NewCarDto";

class CarService{
    private BASE_URL:string = "http://localhost:8080/api";
    private ENDPOINT:string = "/cars";

    getCars(){
        const url = this.BASE_URL+this.ENDPOINT;
        return axios.get(url);
    }
    getCar(id:number){
        const url = this.BASE_URL+this.ENDPOINT+"/"+id;
        return axios.get(url);
    }
    getBuilders(){
        const url = this.BASE_URL+this.ENDPOINT+"/builders";
        return axios.get(url);
    }
    getCarsByBuilders(builder:string){
        const url = this.BASE_URL+this.ENDPOINT+"/builders/search";
        return axios.get(url,{params:{builder}});
    }
    newCar(newCar:NewCarDto){
        const url = this.BASE_URL+this.ENDPOINT;
        return axios.post(url,newCar);
    }


}
export default new CarService;