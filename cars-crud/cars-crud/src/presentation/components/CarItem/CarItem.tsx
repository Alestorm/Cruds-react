import React from 'react';
import CarDto from '../../../application/dtos/CarDto';
import './CarItem.css';
import { Link } from 'react-router-dom';

interface props{
    car:CarDto;
}
const CarItem:React.FC<props> =({car})=> {
  return (
    <div className='car-item'>
      <div className='car-image-container'>
        <img className='car-image' src={car.image}/>
      </div>
      <div className='car-features'>
        <p className='car-year'>{car.year}</p>
        <p className='car-builder'>{car.builder}</p>
        <p className='car-model'>{car.model}</p>
      </div>
      <div className='car-price-container'>
        <p className='car-price'>$ {car.price}</p>
        <Link to={"/cardetails/"+car.idCar} className='btn-car-details'>Details</Link>
      </div>
    </div>
  )
}

export default CarItem