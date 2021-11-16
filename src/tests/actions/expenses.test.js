import {addExpense, editExpense, removeExpense} from "../../actions/expenses";

test('Shoud setup remove exprense action object', ()=>{
    const action = removeExpense(123);
    expect(action).toEqual({
        type:'REMOVE_EXPENSE',
        id:123
    })
})


