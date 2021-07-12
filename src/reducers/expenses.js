
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

export default  expensesReducer;