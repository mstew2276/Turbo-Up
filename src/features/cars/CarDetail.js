import { Card, CardImg, CardText, CardBody, Col } from 'reactstrap';

const CarDetail = ({ car }) => {
    const { image, name, description } = car;

    return (
        <Col md='' className='m-4'>
            <Card>
                <CardImg top src={image} alt={name} />
                <CardBody>
                    <CardText>{description}</CardText>
                </CardBody>
            </Card>
        </Col>
    )
};

export default CarDetail;