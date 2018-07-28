import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';

const ExpensifyDashboardPage = () =>(
    <div>
     Tis' the Dashboard!.. welcome
     <ExpenseListFilters />  
     <ExpenseList/>
       </div>
  );
  
 export default ExpensifyDashboardPage; 
  