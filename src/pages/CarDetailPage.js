import { Container, Row } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { selectCarById } from '../features/cars/carsSlice';
import { selectCarPartsById } from '../features/cars/carsSlice';
import CarDetail from '../features/cars/CarDetail';
// import CommentsList from '../features/comments/CommentsList';
import SubHeader from '../components/SubHeader';
import { useSelector } from 'react-redux'
// import Error from '../components/Error';
// import Loading from '../components/Loading';
import '../components/CarDetailPage.css';
import DisplayList from '../features/display/DisplayList';

const CarDetailPage = () => {
    const { carId } = useParams();
    const car = selectCarById(carId);
    console.log('car:', car);
    
    
        return(
            <div className='bg'>
                
            <Container>
                
                <SubHeader current='Car Mods' />
                
                <CarDetail car={car}/>
            </Container>
            </div>
        );
    };

    


export default CarDetailPage;