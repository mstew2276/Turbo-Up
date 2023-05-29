import { Col, Row } from 'reactstrap';
import CarCard from "./CarCard";
import { selectALLCars } from './carsSlice';

const CarsList = ({ setCarId }) => {
    const cars = selectALLCars();

    return (
        <Row className='ms-auto'>
            {cars.map((car) => {
                return (
                    <Col 
                        md='5' 
                        className='m-4'
                         key={car.id}
                    >
                        <CarCard car={car} />
                    </Col>
                );
            })}
        </Row>
    );
};

export default CarsList;