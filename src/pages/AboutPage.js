import { Container} from 'reactstrap';
import CarsList from '../features/cars/CarsList';
import SubHeader from '../components/SubHeader';
import React from 'react';
import '../components/HomePage.css';
import AboutDescription from '../components/AboutDescription';

const AboutPage = () => {
    return (
        <div className='bg'>
        <Container>
            <SubHeader current='About' />
            <AboutDescription />
        </Container>
        </div>
    );
};

export default AboutPage;