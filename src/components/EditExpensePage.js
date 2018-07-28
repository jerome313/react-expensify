import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense } from '../actions/expenses';
import {removeExpense} from '../actions/expenses'; 

const EditExpensePage = (props) =>(
    <div>
   { console.log(props)}
    <ExpenseForm
    expense={props.expense}
    onSubmit={(expense)=>{
      console.log('updated', expense)
      props.dispatch(editExpense(props.expense.id,expense));
       props.history.push('/');
    }}
    />
    <button
     onClick={()=>{props.dispatch(removeExpense({id:props.expense.id}))
     props.history.push('/');}
    }
    >Delete</button>
    </div>
  );

  const mapSateToProps=(state,props)=>{
   return{
       expense:state.expenses.find((expense)=>expense.id === props.match.params.id)
   };
  };
export default connect(mapSateToProps)(EditExpensePage);  