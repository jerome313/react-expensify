import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';

export const ExpensesSummary = ({  expenseCount , expensesTotal }) => {
const expenseWord = expenseCount > 1 ? 'expenses' : 'expense';
const formattedExpensesTotal = numerl(expensesTotal / 100).format('$0,0.00')
return(
  <div>
    <h1>Veiwing {expenseCount} {expenseWord} totalling {formattedExpensesTotal}</h1>
  </div>
 );
};