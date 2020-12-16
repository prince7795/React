// import React, { Fragment } from 'react';
// import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// import { logout } from '../../redux/actions/authAction';

// const Header = ({ auth: { isAuthenticated }, logout }) => {
//   const authLinks = (
//     <ul>
//       <li>
//         <Link to="/profiles">Developers</Link>
//       </li>
//       <li>
//         <Link to="/posts">Posts</Link>
//       </li>
//       <li>
//         <Link to="/dashboard">
//           <i className="fas fa-user" />{' '}
//           <span className="hide-sm">Dashboard</span>
//         </Link>
//       </li>
//       <li>
//         <a onClick={logout} href="#!">
//           <i className="fas fa-sign-out-alt" />{' '}
//           <span className="hide-sm">Logout</span>
//         </a>
//       </li>
//     </ul>
//   );

//   const guestLinks = (
//     <ul>
//       <li>
//         <Link to="/profiles">Developers</Link>
//       </li>
//       <li>
//         <Link to="/register">Register</Link>
//       </li>
//       <li>
//         <Link to="/login">Login</Link>
//       </li>
//     </ul>
//   );

//   return (
//     <nav className="navbar bg-dark">
//       <h1>
//         <Link to="/">
//           <i className="fas fa-code" /> DevConnector
//         </Link>
//       </h1>
//       <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
//     </nav>
//   );
// };

// Navbar.propTypes = {
//   logout: PropTypes.func.isRequired,
//   auth: PropTypes.object.isRequired
// };

// const mapStateToProps = (state) => ({
//   auth: state.auth
// });

// export default connect(mapStateToProps, { logout })(Header);


import React, { Component, useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {login} from '../../redux/actions/authAction'
import { Redirect } from 'react-router-dom'
export const Login = ({login,isAuthenticated}) => {
   
//const [data,settterfunction]= useState({initail data})
const [formData,setFormData]= useState({username:'',password:''})
const {username,password} = formData;
const  handleChange = (event) => {
 setFormData({...formData,[event.target.name]:event.target.value})
};

const onSubmit = (e) => {
  e.preventDefault();
  console.log("Final state: " + username );
  console.log("password"+password);
  const loginUser = {
    username: username,
    password: password,
  };
 
  login(username,password)
    
  //  localStorage.setItem('data',JSON.stringify(response.data))
   
};
if(isAuthenticated){
  return <Redirect to='/dashboard'></Redirect>
}
return (
  <div className="login">
  <div className="container">
    <div className="row">
      <div className="col-md-8 m-auto">
        <h1 className="display-4 text-center">Log In</h1>
        <p className="lead text-center">
          Sign in to your DevConnector account
        </p>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Username"
              name="username"
              value={username}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control form-control-lg"
              placeholder="Password"
              name="password"
              value={password}
              onChange={handleChange}
            />
          </div>
          <input
            type="submit"
            value="Login"
            className="btn btn-info btn-block mt-4"
          />
        </form>
      </div>
    </div>
  </div>
</div>

)

}

Login.propTypes = {
 login:PropTypes.func.isRequired,
 isAuthenticated:PropTypes.bool
}

const mapStateToProps = (state) => ({

  isAuthenticated:state.auth.isAuthenticated
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, {login})(Login)