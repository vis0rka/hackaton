import React from 'react';

const Budgetcard = ({category, amount, date}) => (
  <div className="card mb-4 shadow">
    <div className="card-header d-flex align-items-center justify-content-between">
      <img className="icons" src={`http://borbandibarkacs.hu/wp-content/uploads/2019/hackaton/${category}.svg`}/> 
      <h3 className="text-center ml-5">{category}</h3>
    </div>
    <div className="d-flex">
      <div className="card-body">
        <h5 className="card-title d-inline">Amount: </h5><h5 className="d-inline text-danger">- {amount} Ft</h5>
        <p className="card-text text-right"><small>{date}</small></p>
      </div>
    </div>
  </div>
);

export default Budgetcard;