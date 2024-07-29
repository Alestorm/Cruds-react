import React, { useEffect, useState } from "react";
import FormInput from "../FormInput/FormInput";
import NewCarDto from "../../../application/dtos/NewCarDto";
import CarService from "../../../application/services/CarService";
import CarDto from "../../../application/dtos/CarDto";
import Response from "../../../domain/entities/Response";
import { useNavigate } from "react-router-dom";

interface props {
  id: number;
}
const CarForm: React.FC<props> = ({ id }) => {
  const navigate = useNavigate();

  const [idCar, setIdCard] = useState(0);
  const [builder, setBuilder] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [color, setColor] = useState("");
  const [plate, setPlate] = useState("");
  const [engineSize, setEngineSize] = useState("");
  const [fuelType, setFuelType] = useState("");
  const [transmission, setTransmission] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");

  const [car, setCar] = useState<NewCarDto>();

  useEffect(() => {
    console.log(id)
    if (id > 0) {
      CarService.getCar(id)
        .then((res) => {
          const response: Response<CarDto> = res.data;
          const cardto = response.data;
          const editCar: NewCarDto = new NewCarDto(
            cardto.builder,
            cardto.model,
            cardto.year,
            cardto.color,
            cardto.plate,
            cardto.engineSize,
            cardto.fuelType,
            cardto.transmission,
            cardto.image,
            cardto.price
          );
          setCar(editCar);
        })
        .catch((error) => console.log(error));
    }
  }, [id]);
  
  useEffect(() => {
    if (car) {
      carInputs(car); // Llama a carInputs solo si car no es null
    }
  }, [car]);
  const handleBuilderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBuilder(e.target.value);
  };

  const handleModelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setModel(e.target.value);
  };

  const handleYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setYear(e.target.value);
  };

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
  };

  const handlePlateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlate(e.target.value);
  };

  const handleEngineSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEngineSize(e.target.value);
  };

  const handleFuelTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFuelType(e.target.value);
  };

  const handleTransmissionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTransmission(e.target.value);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImage(e.target.value);
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(e.target.value);
  };

  const carInputs = (car: NewCarDto) => {
    setBuilder(car.builder);
    setModel(car.model);
    setYear(car.year + "");
    setColor(car.color);
    setPlate(car.plate);
    setEngineSize(car.engineSize + "");
    setFuelType(car.fuelType);
    setTransmission(car.transmission);
    setImage(car.image);
    setPrice(car.price + "");
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario
    const carData: NewCarDto = {
      builder,
      model,
      year: parseInt(year),
      color,
      plate,
      engineSize: parseFloat(engineSize),
      fuelType,
      transmission,
      image,
      price: parseFloat(price),
    };
    if (id > 0) {
    }
    if (id === 0) {
      CarService.newCar(carData)
        .then((res) => {
          console.log(res.data);
          navigate("/");
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="car-form">
      <h1>{id > 0 ? "Edit car" : "New car"}</h1>
      <form onSubmit={handleSubmit}>
        <FormInput
          value={builder}
          label="Builder"
          placeholder="Builder..."
          type="text"
          onChange={handleBuilderChange}
        />

        <FormInput
          value={model}
          label="Model"
          placeholder="Model..."
          type="text"
          onChange={handleModelChange}
        />

        <FormInput
          value={year}
          label="Year"
          placeholder="Year..."
          type="text"
          onChange={handleYearChange}
        />

        <FormInput
          value={color}
          label="Color"
          placeholder="Color..."
          type="text"
          onChange={handleColorChange}
        />

        <FormInput
          value={plate}
          label="Plate"
          placeholder="Plate..."
          type="text"
          onChange={handlePlateChange}
        />

        <FormInput
          value={engineSize}
          label="Engine Size"
          placeholder="Engine Size..."
          type="text"
          onChange={handleEngineSizeChange}
        />

        <FormInput
          value={fuelType}
          label="Fuel Type"
          placeholder="Fuel Type..."
          type="text"
          onChange={handleFuelTypeChange}
        />

        <FormInput
          value={transmission}
          label="Transmission"
          placeholder="Transmission..."
          type="text"
          onChange={handleTransmissionChange}
        />

        <FormInput
          value={image}
          label="Image"
          placeholder="Image URL..."
          type="text"
          onChange={handleImageChange}
        />

        <FormInput
          value={price}
          label="Price"
          placeholder="Price..."
          type="text"
          onChange={handlePriceChange}
        />
        <button className="btn-submit" type="submit">
          {id > 0 ? "Edit car" : "Save car"}
        </button>
      </form>
    </div>
  );
};

export default CarForm;
