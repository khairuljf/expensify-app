
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


export default getVisibleExpense;