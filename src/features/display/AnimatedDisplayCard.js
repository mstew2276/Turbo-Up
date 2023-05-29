import { useState, useEffect } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Button } from 'reactstrap';
import { useSpring, animated } from 'react-spring';
import { Link } from 'react-router-dom';
import './AnimatedDisplayCard.css'

const AnimatedDisplayCard = ({ item }) => {
    const { image, name, description } = item;
    const [toggle, setToggle] = useState(false);

    const animatedStyle = useSpring({
        oppacity: toggle ? 1 : 0,
        transform: toggle ? 'scale(1,1)' : 'scale(1,0)',
        config: { duration: 500 }
    });

    useEffect(() => {
        setToggle(true);
    }, []);

   
    return (
        <div className='opening-page'>
        <animated.div style={animatedStyle} >
            <Card >
                <div class='imgcontainer'>
                <CardImg src={image} alt={name}  />
                <div className='centerbg'>
                <h1 class="centered">Unleash True Power</h1>
                </div>
                </div>
                <div className='entirebutton'>
                <Button
                className='buttonstyle'
                    outline
                    
                ><Link className='moddinglink' to='/directory'>
                    
                        <CardBody>
                            
                            <CardTitle 
                            outline
                            className='titlestyle'
                            >
                                Start Modding?
                            </CardTitle>

                            {/* <CardTitle>{name}</CardTitle> */}
                            {/* <CardText>{description}</CardText> */}
                        </CardBody>
                    </Link>
                </Button>
                </div>
            </Card>
        </animated.div>
        </div>
    );
};

export default AnimatedDisplayCard;