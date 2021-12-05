import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter, sortByAmmount } from './actions/filters';
import getVisibleExpense from './selectors/expenses';
import './firebase/firebase'



import './styles/styles.scss';

const store = configureStore();

const state  = store.getState();

const jsx = (
    <Provider store={store}>
            <AppRouter />
    </Provider>

)


ReactDOM.render(jsx, document.getElementById('app'))
