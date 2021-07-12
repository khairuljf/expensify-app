import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) =>(
    <div>
        <h1>Info</h1>
        <p>This info is :{props.info}</p>
    </div>
);

const WithAdminWarning = (WrappedComponent) =>{
    return(props)=>(
        <div>
           {props.isAdmin &&  <p>This is private info. Please don't Share</p>}
            <WrappedComponent {...props}/>
        </div>
    )
}

const AdminInfo = WithAdminWarning(Info)

ReactDOM.render(<AdminInfo isAdmin={true} info="Khairul" />, document.getElementById("app"))