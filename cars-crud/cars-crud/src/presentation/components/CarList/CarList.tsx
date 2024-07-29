import React from 'react';
import CarDto from '../../../application/dtos/CarDto';
import './CarList.css';
import CarItem from '../CarItem/CarItem';

interface props{
    cars:CarDto[];
}
const CarList:React.FC<props> = ({cars}) => {
  return (
    <div className="car-list">
        {cars.map((c) => (
          <CarItem key={c.idCar} car={c} />
        ))}
      </div>
  )
}

export default CarList
