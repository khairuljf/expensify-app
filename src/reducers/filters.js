

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

export default filterReducer;