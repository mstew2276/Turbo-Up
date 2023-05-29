import { Container} from 'reactstrap';
import CarsList from '../features/cars/CarsList';
import SubHeader from '../components/SubHeader';
import React from 'react';

const CarsDirectoryPage = () => {
    return (
        <Container>
            <SubHeader current='Directory' />
            <CarsList />
        </Container>
    );
};

export default CarsDirectoryPage;