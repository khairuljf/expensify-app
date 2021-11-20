import React from 'react';
import {Link} from "react-router-dom";
import {removeExpense} from '../actions/expenses';
import { connect } from 'react-redux';


const ExpenseListItem = (props) =>(
    <div>
       <h4>Title: {props.description}</h4>
       ammount: {props.ammount}
        <p>My id is {props.id}</p>
        <Link to={`/edit/${props.id}`} >edit</Link>
        <button onClick={(e)=>{
           props.dispatch(removeExpense(props.id))
       }}>
        Remove 
       </button>
    </div>

);

export default connect()(ExpenseListItem);
