import React, { component,useState, useEffect } from 'react';
 import "./navbar/Navbar.scss";
 
//import { Button, Modal, ModalTitle } from 'react-bootstrap'
import axios from 'axios'

function LoginForm( ) {
  //fff
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8800/api/gigs", {
      method: "GET"
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userData")
        setData(data.data)
      });

  });




  //ff
  //const [Data,setData]=useState([])
  const [details, setDetails] = useState({ name: "", email: "", password: "" });





  const GetEmployeeData = () => {
    const url = "/api/s"
    axios.get(url)
      .then(response => {
        const result = response.data
        const { status, message, data } = result;
        if (status !== 'SUCCESS') {
          alert(message, status)
        }
        else {
          setData(data)
          console.log(data)
        }

      })
      .catch(err => {
        console.log("ttttttttttttttt" + err)
      })
  }
  useEffect(() => {
    GetEmployeeData()
  }, [])





  const submitHandler = e => {
    e.preventDefault();
    Login(details);
  }

  const adminUser = {
    email: "admin@gmail.com",
    password: "admin"
  };

  const [user, setUser] = useState({ name: "", email: "" });
  const [errorMessage, setErrorMessage] = useState("");

  const Login = details => {
    console.log(details);
    if (details.email === adminUser.email && details.password === adminUser.password) {
      console.log("loggedin");
      setUser({
        name: details.name,
        email: details.email
      });
    } else {
      console.log("not matched");
      setErrorMessage("Username or password is incorrect");
    }
  };

  const handleLogout = () => {
    setUser({ name: "", email: "" });
  };

  const Layout = () => {
    return (
      <>
<div className='row'>
                <div className='table-responsive'>
                    <table className='table table-striped table-hover table-bordered'>
                        <thead>
                            <tr>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {data && data.map((item) =>{
                            return(
                                 <tr key={item._id}> 
                                    <td>{item.title}</td>
                                    <td>{item.desc}</td>
                                    <td>{item.totalStars}</td>
                                    <td>{item.starNumber}</td>
                                    <td>{item.cat}</td>
                                    <td style={{ minWidth: 190 }}>
                                        <Button size='sm' variant='primary'  >View</Button>|
                                        <Button size='sm' variant='warning'   >Edit</Button>|
                                        <Button size='sm' variant='danger'  >Delete</Button>|
                                    </td>
                                 </tr>
                            )})}
                        </tbody>
                    </table>
                </div>
            </div>


      //m
        {user.email !== "" ? (
          <div className="welcome">
            <h2>Welcome</h2>
            <button onClick={handleLogout}>Logout</button>

            <div>

            </div>
             
























          </div>
        ) : (
          <form className="login-form" onSubmit={submitHandler}>
            <div className="form-inner">
              {errorMessage !== "" && <div className="error">{errorMessage}</div>}
              <div className="form-inner">
                <label htmlFor="name">Username:</label>
                <input type="text" name="name" id="name" autoComplete="username" value={details.name} onChange={e => setDetails({ ...details, name: e.target.value })} />
              </div>
              <div className="form-inner">
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" id="email" autoComplete="username" value={details.email} onChange={e => setDetails({ ...details, email: e.target.value })} />
              </div>
              <div className="form-inner">
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" id="password" autoComplete="current-password" value={details.password} onChange={e => setDetails({ ...details, password: e.target.value })} />
              </div>
              <input type="submit" onClick={Login} value="LOGIN" />
            </div>
          </form>
        )}
      </>
    );
  };

  return <Layout />;
}

export default LoginForm;