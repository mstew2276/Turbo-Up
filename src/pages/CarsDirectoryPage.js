import { Container} from 'reactstrap';
import CarsList from '../features/cars/CarsList';
import SubHeader from '../components/SubHeader';
import React from 'react';
import '../components/CarsDirectoryPage.css';

const CarsDirectoryPage = () => {
    return (
        <div className='bg'>
        <Container>
            <SubHeader current='Directory' />
            <CarsList />
        </Container>
        </div>
    );
};

export default CarsDirectoryPage;