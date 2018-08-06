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
    add expense page
    <h3>Expense form</h3>
    <ExpenseForm  
    onSubmit={this.onSubmit}
    />
    </div>); 
  }

}



// const mapDispatchToProps = (dispatch) => ({
//    startAddExpense: (expense) => dispatch(startAddExpense(expense))
// })
export default connect()(AddExpensePage);
