import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './styles/styles.scss';



const Dashboard = () =>(
 <div>
     <p>Loading from Dashboard</p>
 </div>
);

const CreateSomething = () =>(
        <div>
            <p>Create Something Component</p>
        </div>
);

const EditFunction = () =>(
    <div>
        <p>Edit component</p>
    </div>
)

const route = (
    
       <BrowserRouter>
         <div>
            <Route path="/" component={Dashboard} ></Route>
            <Route path="/create" component={CreateSomething} ></Route>
            <Route path="/edit" component={EditFunction} ></Route>
         </div>
       </BrowserRouter>
    
)








ReactDOM.render(route, document.getElementById('app'))