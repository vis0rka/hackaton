import React, { Component } from 'react'
import {connect} from 'react-redux';
import Card from '../../Components/Card/card';

class Cardlist extends Component {

    returnTimefromDate = date => (new Date(date).toLocaleDateString());

    render(){
      return (
        <React.Fragment>
          <div className="col-md-2">
          {this.props.userExpense.map(e=> {
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


const mapStateToProps = store => ({
 userExpense: store.userBalance.expense
});


const mapDispatchToProps = {
  // dispatch actions
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cardlist);
