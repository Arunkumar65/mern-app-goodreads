import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'
import { DropDown } from '../Dropdown/DropDown'
import { StartRating } from '../Rating/Rating'
export const BookDetails = () => {
    const { state } = useLocation();
    console.log(state)
    return (
        <>
            <Container>
                <Row>
                    <Col xs={12} sm={12} md={3} lg={3}>
                        <img className='detail-book-img' src={state.thumbnailUrl} alt='' />
                    </Col>
                    <Col xs={12} sm={12} md={9} lg={9}>
                        <h4 className='book-title'>The Improbable Meet-Cute #2</h4>
                        <h4 className='book-name'>Worst Wingman Ever</h4>
                        <h4 className='author-name-lg'>Sariah Wilson <span className='g-icon'></span></h4>
                        <div className='star-rating'>
                            <StartRating from={'detail'} size={'large'} />
                        </div>
                        <p>{state?.longDescription}</p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
