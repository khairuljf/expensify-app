import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

import Dashboard from '../dashboard';
import CreateExpensify from '../createExpensify';
import EditExpensify from '../editExpensify';
import HelpFunction from '../helpFunction';
import NotFoundPage from '../notFoundPage';


   

   
 

  
   
   const Header = ()=>(
   
       <header>
           <h1>Expensify</h1>
          <div className="navlink">
           <NavLink  to="/" exact activeClassName="active-now">Home</NavLink>
           <NavLink to="/create" activeClassName="active-now">Create</NavLink>
           <NavLink to="/edit" activeClassName="active-now">Edit</NavLink>
           <NavLink to="/help" activeClassName="active-now">Help</NavLink>
          </div>
       </header>
   
   );


   const AppRouter = () =>(
    <BrowserRouter>
    <div>
    
        <Header />
        <Switch>
            <Route path="/" component={Dashboard} exact={true} />
            <Route path="/create" component={CreateExpensify} />
            <Route path="/edit" component={EditExpensify} />
            <Route path="/help" component={HelpFunction}/>
            <Route  component={NotFoundPage}></Route>`
        </Switch>
    </div>
    
   </BrowserRouter>
   )


   
export default   AppRouter;
   
   
   