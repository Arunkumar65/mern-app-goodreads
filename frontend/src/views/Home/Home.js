import React from 'react'
import { TopHeader } from '../../component/Header/TopHeader';
import { MenuNavbar } from '../../component/Navbar/Navbar';
import { Col, Container, Row } from "react-bootstrap"
import './Home.css'
import { BooksItemContainer } from '../../component/BooksItem/BooksItemContainer';
export const Home = () => {
    return (
        <>
            
            <Container>
                <div className='content'>
                    <Row>
                        <Col md={3}></Col>
                        <Col md={6}>
                            <div className='d-flex justify-content-between'>
                                <h5 className='item-h-label'>Update</h5>
                                <h5 className='item-cus-label'><i className="ri-settings-4-line setting-icons"></i>Customize</h5>
                            </div>
                            <BooksItemContainer />
                        </Col>
                        <Col md={3}></Col>
                    </Row>
                </div>
            </Container>

        </>
    )
}
