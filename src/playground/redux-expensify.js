import { createStore, combineReducers } from "redux";
import uuid from 'uuid';


const addExpense = ( 
     {
        description='',
        note='',
        ammount=0,
        createAt=0
    }={}) =>({
        type:'ADD_EXPENSE',
        expenses:{
            id:uuid(),
            description,
            note,
            ammount,
            createAt
        }

});


// Expenses Reducer 
const expensesReducerDefaultState  = []

const expensesReducer = (state= expensesReducerDefaultState, action)=>{
    switch(action.type){
        default:
            return state;
    }
}

// Filter Reducer 
const filterReducerDefaultState  = {
    text : '',
    sortBy:'date',
    startDate:undefined,
    endDate:undefined,
}

const filterReducer = (state=filterReducerDefaultState, action) =>{
        switch(action.type){
            default:
                return state;
        }
}




const store = createStore(combineReducers({
        expenses:expensesReducer,
        filters:filterReducer
        
}))

console.log(store.getState())






const demoState ={
    expenses:[{
        id:'poinger',
        description: ' January Rent',
        note:'This was the final payment for that address',
        ammount:2500,
        createAt:0
    }],
    filters:{
        text:'rent',
        sortBy:'amount', // Date or amount
        startDate: undefined,
        endDate:undefined
    }
}