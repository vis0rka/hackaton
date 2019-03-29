import React from 'react';
import ProgressBar from '../ProgressBar/ProgressBar';

const Budgetcard = ({category, balance, key, percentage}) => (
  <div className="card mb-4 shadow" id={key}>
    <div className="card-header d-flex align-items-center justify-content-between">
      <img className="icons" src={`http://borbandibarkacs.hu/wp-content/uploads/2019/hackaton/${category}.svg`}/> 
      <h3 className="text-center ml-5">{category}</h3>
    </div>
    <div className="d-flex">
      <div className="card-body">
        <h5 className="card-title d-inline">Remaining Amount: </h5><h5 className="d-inline text-success">{balance} Ft</h5>
        <div className="d-flex justify-content-center mt-2">
        <ProgressBar percentage={percentage}/>
        </div>
      </div>
    </div>
  </div>
);

export default Budgetcard;