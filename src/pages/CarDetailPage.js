import { Container, Row } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { selectCarById } from '../features/cars/carsSlice';
import CarDetail from '../features/cars/CarDetail';
// import CommentsList from '../features/comments/CommentsList';
import SubHeader from '../components/SubHeader';
import { useSelector } from 'react-redux'
// import Error from '../components/Error';
// import Loading from '../components/Loading';
import '../components/CarDetailPage.css';

const CarDetailPage = () => {
    const { carId } = useParams();
    const car = useSelector(selectCarById(carId));
    console.log('car:', car);


        return (
            <div className='cardetail'>
            <Container>
                {car && <SubHeader current={car.name} detail={true} />}
                <Row>
                    {(<>
                    
                    <CarDetail car={car} />
                    
                    </>)}
                </Row>
            </Container>
            </div>
        );
    }

    


export default CarDetailPage;