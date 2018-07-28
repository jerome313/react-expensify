import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import './styles/styles.scss'
import 'normalize.css/normalize.css';

const store = configureStore();

const state = store.getState(); 
console.log(store.getState());
console.log(getVisibleExpenses(state.expenses, state.filters));
const jsx = (
<Provider store={store}>
  <AppRouter/>
</Provider>
);
ReactDOM.render(jsx,document.getElementById('app'));     