import React from 'react';
import {Link} from "react-router-dom";
import {removeExpense} from '../actions/expenses';
import moment from "moment";
import numeral from 'numeral'



const ExpenseListItem = (props) =>(
    <div>
       <h4>Title: {props.description}</h4>
      <p>
          {numeral(props.ammount/ 100).format('$0,0.00')}

          -
          crate at: {moment(props.createAt).format('MMMM Do, YYYY')}
      </p>
        <p>My id is {props.id}</p>
        <Link to={`/edit/${props.id}`} >edit</Link>
        <button onClick={(e)=>{
           props.dispatch(removeExpense(props.id))
       }}>
        Remove 
       </button>
    </div>

);

export default ExpenseListItem;
