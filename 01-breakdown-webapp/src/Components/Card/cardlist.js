import React, { Component } from 'react'
import Card from '../../Components/Card/card';

class Cardlist extends Component {
  temparray = [{
    amount: 100,
    category: "car",
    date: 1553776020147,
    _id: "5c9cbd9458930f3bbc0e6878",
    },
    {
    amount: 10,
    category: "food",
    date: 1553782921923,
    _id: "5c9cd889e8a6281e708c7bf9",
    }]

    returnTimefromDate = date => (new Date(date).toLocaleDateString());

    render(){
      return (
        <React.Fragment>
          <div className="col-md-2">
          {this.temparray.map(e=> {
            return(
              <Card 
              amount={e.amount}
              title={e.category}
              date={this.returnTimefromDate(e.date)}
              img={`http://borbandibarkacs.hu/wp-content/uploads/2019/hackaton/${e.category}.svg`}
              />)
            })}
        </div>
        </React.Fragment>
      )
    }
}

export default Cardlist;