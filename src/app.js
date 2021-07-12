import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';

import './styles/styles.scss';

const store = configureStore();
 
store.dispatch(addExpense({description:'Water'}))

console.log(store.getState())




ReactDOM.render(<AppRouter />, document.getElementById('app'))
