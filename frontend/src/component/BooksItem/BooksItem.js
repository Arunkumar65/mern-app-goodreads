import React from 'react'
import './BooksItem.css';
import { Link, useNavigate } from "react-router-dom";
import { DropDown } from '../Dropdown/DropDown';
import { Row, Col } from "react-bootstrap"
import { StartRating } from '../Rating/Rating';


export const BooksItem = ({ data }) => {
  const navigate = useNavigate();

  const navigateBookDetail = (details) => {
    navigate('/books-details', { state: details })
  }

  return (
    <div className='book-item'>
      <div className='goodreads-icon'></div>
      <div className='d-flex'>

        <div className='container-content'>
          <p>{data.title} <b>Romance</b></p>
          <div className='book-item-flex'>
            <div>
              <img className='book-img-width' onClick={() => {
                navigateBookDetail(data);
              }} src={data.thumbnailUrl} alt='' />
            </div>
            <div>
              <Link className='book-item-label' onClick={() => navigateBookDetail(data)}>Royal Valentine (The Improbable Meet-Cute, #6)</Link>
              <h5 className='author-name-h'>by <Link className='author-name-a'>Sariah Wilson</Link>  <span className='g-icon'></span></h5>
              <Row>
                <Col sm={12} md={6} xs={12} lg={5}>
                  <DropDown />
                </Col>
                <Col>
                  <StartRating size={'small'} />
                </Col>
              </Row>
              <div className='discription'>
                {data?.longDescription?.slice(0, 200)}... <Link onClick={() => navigateBookDetail(data)} className='link-text'>Continue reading</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
