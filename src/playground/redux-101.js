import {createStore} from 'redux';


const incrementCount = ({incrementBy=1}={}) =>({
        type:'INCREMENT',
        incrementBy
    })
const decrementCount = ({decrementBy=1}={})=>({
    type:'DECREMENT',
    decrementBy
})

const setValue = ({count=100}={}) =>({
    type:'SET',
    count
})

const reset = () =>({    type:'RESET'})


const countReducer = (state={count:0}, action)=>{
 console.log(action)
    switch(action.type){

        case'INCREMENT':
           
            return {
                count:state.count + action.incrementBy
            };

        case'DECREMENT':
            const decrementBy =  action.decrementBy
            return {
                count:state.count - decrementBy
            };

        case'SET':
        
            return {
                count:action.count
            };


        case'RESET':
            return{
                count:0
            }

        default:
            return state;
    }
    
}



const store =  createStore(countReducer); 


    const unsubscribe = store.subscribe(()=>{
        console.log(store.getState());
    });


    store.dispatch( incrementCount( {incrementBy:10} ) )


    store.dispatch(decrementCount({decrementBy:3}))

   
    store.dispatch(reset())

   
    store.dispatch(setValue({count:100}))



