import { useParams } from "react-router-dom";
import CarForm from "../../components/CarForm/CarForm";

const EditCar = () => {
  const { id } = useParams();
  console.log(id)
  return (
    <div>
      <CarForm id={id ? parseInt(id) : 0} />
    </div>
  );
};

export default EditCar;
