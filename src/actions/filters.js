

// Set Text Filter
export const setTextFilter = (text = '')=>({
    type:'SET_TEXT_FILTER',
    text
})

export const sortByDate = () =>({
        type:'SET_DATE_FILTER'
})

export const sortByAmmount = () =>({
    type:'SET_AMMOUNT_FILTER'
})

export const setStartDate = (date=undefined)=>({
    type:'FILTER_START_DATE',
    date
})
export const setEndDate = (date=undefined)=>({
    type:'FILTER_END_DATE',
    date
})