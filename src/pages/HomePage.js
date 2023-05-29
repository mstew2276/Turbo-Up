import { Container } from 'reactstrap';
import '../components/HomePage.css';
import DisplayList from '../features/display/DisplayList';
import SubHeader from '../components/SubHeader';
import smokegif from '../app/assets/img/smoke.gif'


const HomePage = () => {
    return(
        <div className='bg'>
            
        <Container>
            
            <SubHeader current='Home' />
            
            <DisplayList />
        </Container>
        </div>
    );
};

export default HomePage;