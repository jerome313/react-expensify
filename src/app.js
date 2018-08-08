import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter,{history} from './routers/AppRouter';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import { setStartExpenses } from './actions/expenses';
import { login,logout } from './actions/auth';
import getVisibleExpenses from './selectors/expenses';  
import {firebase} from './firebase/firebase';
import LoadingPage from './components/LoadingPage'
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
ReactDOM.render(<LoadingPage/>,document.getElementById('app'));


let hasRendered = false;
const renderApp = () =>{
  if(!hasRendered){
    ReactDOM.render(jsx,document.getElementById('app'));
    hasRendered = true; 
  }
};

firebase.auth().onAuthStateChanged((user)=>{
if (user) {
store.dispatch(login(user.uid));
store.dispatch(setStartExpenses())
.then(()=>{
  renderApp();
  if(history.location.pathname === '/'){
    history.push('/dashboard');
  }
}).catch((e)=>{
 console.log('error',e);
})
}else{
    store.dispatch(logout());
    renderApp();
    history.push('/');

  }
});