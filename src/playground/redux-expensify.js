import { createStore, combineReducers } from "redux";
import uuid from 'react-uuid';


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


// Remvoe Expense
const removeExpense = (id)=>({
    type:'REMOVE_EXPENSE',
    id
})

// Edit Expense 
const editExpense = (id, update)=>({
    type:'EDIT_EXPENSE',
    id,
    update
})


// Set Text Filter
const setTextFilter = (text = '')=>({
    type:'SET_TEXT_FILTER',
    text
})

const sortByDate = () =>({
        type:'SET_DATE_FILTER'
})

const sortByAmmount = () =>({
    type:'SET_AMMOUNT_FILTER'
})

const setStartDate = (date=undefined)=>({
    type:'FILTER_START_DATE',
    date
})
const setEndDate = (date=undefined)=>({
    type:'FILTER_END_DATE',
    date
})



// Expenses Reducer 
const expensesReducerDefaultState  = []

const expensesReducer = (state= expensesReducerDefaultState, action)=>{


    switch(action.type){
        case 'ADD_EXPENSE':
            return [
                ...state, 
                action.expenses
            ]
        case 'REMOVE_EXPENSE':
        
            return state.filter(({id})=> id !==action.id)
            
        case 'EDIT_EXPENSE':
            return state.map((expense)=>{
                if(expense.id == action.id){
                    return{
                        ...state,
                    ...action.update
                    }
                }else{
                    return state
                }
            })

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
            case 'SET_TEXT_FILTER':
                return{
                    ...state,
                    text:action.text
                }
            case 'SET_DATE_FILTER':
                return{
                    ...state,
                    sortBy:'date'
                }
            case 'SET_AMMOUNT_FILTER':
                return{
                    ...state,
                    sortBy:'ammount'
                }

            case 'FILTER_START_DATE':
                return{
                    ...state,
                    startDate:action.date
                }
            case 'FILTER_END_DATE':
                return{
                    ...state,
                    endDate:action.date
                }
            default:
                return state;
        }
}


// Get visible expense

const getVisibleExpense = (expenses, {text, sortBy, startDate, endDate}) =>{
    return expenses.filter((expense)=>{

        const startDateMatch = typeof startDate !== 'number' || expense.createAt>=startDate;
        const endDateMatch = typeof endDate !== 'number' ||  expense.createAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

    
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b)=>{
        if(sortBy === 'date'){
            return a.createAt < b.createAt ? 1 : -1
        } else if (sortBy === 'ammount'){
            return a.ammount < b.ammount ? 1 : -1
        }
    });
     
}



//create store
const store = createStore(combineReducers({
        expenses:expensesReducer,
        filters:filterReducer
})

)


store.subscribe(()=>{
    const state = store.getState();
    const visibleExpenses = getVisibleExpense(state.expenses, state.filters)
    console.log(visibleExpenses)
})

store.dispatch(addExpense({description:'Rent', ammount:100, createAt:1000}));

const coffe = store.dispatch(addExpense({description:'Coffe', ammount:500,  createAt:300}));

// const Cocataile = store.dispatch(addExpense({description:'Cocataile', ammount:100}));

// store.dispatch(removeExpense(coffe.expenses.id))

// store.dispatch(editExpense(Cocataile.expenses.id, {ammount:1000}))

// store.dispatch(setTextFilter('Rent'));

// store.dispatch(sortByDate());

// store.dispatch(sortByAmmount());


//store.dispatch(setStartDate(1000))
store.dispatch(setTextFilter('Coffe'));
// store.dispatch(setStartDate())
// store.dispatch(setEndDate(125))



