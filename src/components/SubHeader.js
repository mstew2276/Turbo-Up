import { Col, Row, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import './SubHeader.css'

const SubHeader = ({ current, detail }) => {
    return (
        
        <Row>
            <Col>
                {/* 
                Cool concept to keep but doesn't look great on page
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to='/'>Home</Link>
                    </BreadcrumbItem>
                    {detail && (
                        <BreadcrumbItem>
                            <Link to='/directory'>Directory</Link>
                        </BreadcrumbItem>
                    )}
                    <BreadcrumbItem active>{current}</BreadcrumbItem>
                </Breadcrumb> */}
                <h2 className='currentpage'>{current}</h2>
                <hr />
            </Col>
        </Row>
    );
};

export default SubHeader;