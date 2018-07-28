import React from 'react';
import ReactDOM from 'react-dom';


const Info = (props) =>(
   <div>
   <h1>info</h1>
   <p>The info is: {props.info}</p>
   </div>
);

// const withAdminWarning = (WrappedComponent) =>{
//   return (props) =>(
//     <div>
//     {props.isAdmin && <p>This is private info please dont share</p>}
//      <WrappedComponent {...props}/>
//     </div>
// );
// };

const requireAuthentication = (WrappedComponent) =>{
   return (props) => (
      <div>
       {props.isAuthenticated == true ? <WrappedComponent {...props}/>:<p> you need to log in bro</p> }
      </div>
   );
};
const AuthInfo = requireAuthentication(Info);

ReactDOM.render(<AuthInfo isAuthenticated={false} info="wassup nigga"/>,document.getElementById('app'));

