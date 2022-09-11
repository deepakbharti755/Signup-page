import React, {Component, useState} from "react";
import '../styles/App.css';
import { Link } from "react-router-dom"; 

const App = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [selects, setSelects] = useState();
  const [phoneNumber,setphoneNumber] = useState('');
  const [password, setPassword] = useState('');

  return (
    
    
     <div id="main">
      <h1>Sign Up </h1>
      <form className="form">
      

<input type="text" className="name" placeholder="Name" 
onChange={(e) => setData({ ...data, name: e.target.value })} /><br></br>


<input
                type="email"
                className="Email"
                placeholder="Email ID"
                onChange={(e) => setData({ ...data, email: e.target.value })}
                min={4}
                max={8}
              />
              <br></br>

<h1>{selects}</h1>
        <select value ={selects} onchange = {e=> setSelects(e.target.value)}>
          <option>Gender</option>
          <option>Male</option>
          <option>Female</option>
        </select>
<br></br>

<input type="text" className="phoneNumber" placeholder="Phone Number" 
onChange={(e) => setData({ ...data, name: e.target.value })} /><br></br>

<input type="password" className="password"
 placeholder="Password" onChange={(e) => setData({ ...data, password: e.target.value })}
              />

              <br></br>

    <Link to="/post">
<button className="submit" onClick={(e) => handlesubmit(e)}>
                Submit </button>
       </Link>

      </form>
      </div>
     
  )
}


export default App;
