import { useEffect, useState } from "react";
import "./Home.css";
import CarDto from "../../../application/dtos/CarDto";
import CarService from "../../../application/services/CarService";
import Response from "../../../domain/entities/Response";
import Builders from "../../components/Builders/Builders";
import CarList from "../../components/CarList/CarList";
const Home = () => {
  const [cars, setCars] = useState<CarDto[]>([]);
  const [builder, setBuilder] = useState<string>("");

  const changeBuilder = (b: string) => {
    setBuilder(b);
  };

  useEffect(() => {
    if (!builder) {
      CarService.getCars()
        .then((res) => {
          const carList: Response<CarDto[]> = res.data;
          setCars(carList.data);
        })
        .catch((error) => console.log(error));
    } else {
      CarService.getCarsByBuilders(builder)
        .then((res) => {
          const carList: Response<CarDto[]> = res.data;
          setCars(carList.data);
        })
        .catch((error) => console.log(error));
    }
  }, [builder]);
  return (
    <div className="car-home">
      <Builders changeBuilder={changeBuilder} />
      <CarList cars={cars} />
    </div>
  );
};

export default Home;
