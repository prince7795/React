import React, {useState} from 'react'
import axios from 'axios'

const Login = () => {  
  //const[data,setterfunction] = useState({initial data})
  const [formData, setFormData] = useState({username:'', password:''});
  const {username, password} = formData;
  const handleChange = (event)=>{
      setFormData({...formData, [event.target.name]: event.target.value})
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Username: " + username);
    console.log("Password: " + password);
    const loginUser = {
      username: username,
      password: password,
    };
    axios
      .post("http://localhost:9051/api/auth/signin", loginUser)
      .then((response) =>{ console.log(response.data)
        localStorage.setItem('data', JSON.stringify(response.data))
      })
     .catch((err) => console.log(err));
     
  };
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

export default Login;
// import React from 'react'

// export default function Login() {
//   return (
//     <div>
      
//     </div>
//   )
// }
