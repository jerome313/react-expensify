import React from 'react';
import { connect } from 'react-redux';
import { startAddExpense} from '../actions/expenses'; 
import ExpenseForm from './ExpenseForm';

export class AddExpensePage extends React.Component{
 
  onSubmit = (expense) => {
    console.log(expense); 
    //this.props.startAddExpense(expense);
    console.log(this.props.dispatch);
    this.props.dispatch(startAddExpense(expense));
   this.props.history.push('/');
    }
    
    
  render(){ 
    return( 
    <div>
      <div className="page-header">
         <div className="content-container">
           <h1 className="page-header__title">Add Expense</h1>
          </div>
      </div>
      <div className="content-container">
       <ExpenseForm  
        onSubmit={this.onSubmit}
       />
       </div>
    </div>); 
  }

}

export default connect()(AddExpensePage);
