import { Container} from 'reactstrap';
import CarsList from '../features/cars/CarsList';
import SubHeader from '../components/SubHeader';
import React from 'react';
import '../components/HomePage.css';
import ContactDescription from '../components/ContactDescription';

const ContactPage = () => {
    return (
        <div className='bg'>
        <Container>
            <SubHeader current='Contact' />
            <ContactDescription />
        </Container>
        </div>
    );
};

export default ContactPage;