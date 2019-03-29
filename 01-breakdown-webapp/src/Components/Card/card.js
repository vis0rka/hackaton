import React, {Component} from 'react';
import './card.css';

const Card = ({img, title, category, amount, date}) => (
  <div className="card">
    <div className="card-img-top  rounded-circle">
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
      <button class="badge badge-danger">Delete</button>
      <button class="badge badge-warning">Edit</button>
      </div>
    </div>
  </div>
)

export default Card;