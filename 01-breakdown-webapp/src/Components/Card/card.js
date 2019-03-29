import React from 'react';
import './card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Card = ({img, title, category, amount, date}) => (
  <div className="card-wrapper">
  <div className="card">
    <div className="card-img-top">
      <img src={img} name={category} alt="kep"/>
    </div>
    <div className="card-body">
      <div className="card-title">
        <h5>{title}</h5>
      </div>
      <div className="card-text">
        <p>{amount} FT<br/>
        {date}
        </p>
      </div>
      <div className="buttons">
      <button type="submit">
      <i className="fa-edit fa-1x"><FontAwesomeIcon icon="edit"/></i>
      </button>
      <button type="submit">
      <i className="fa-trash-alt fa-1x"><FontAwesomeIcon icon="trash-alt"/></i>
      </button>
      </div>
    </div>
  </div>
  </div>
)

export default Card;