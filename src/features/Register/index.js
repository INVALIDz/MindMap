import React, {useState,useEffect}from 'react'
import './style.css'



const Register=()=>{
  const [formData, setFormData] = useState({
    show:true,
    name:'',
    email:'',
    password:'',
    password2:''
  })
  useEffect(() => {
    var div = document.getElementById('fullscreen-container');
    if(!show)
    if (div.style.display !== 'none') {
        div.style.display = 'none';
    }
      } )   // Update the document title using the browser API    document.title = `You clicked ${count} times`;  });
  const {show,name,email,password,password2}=formData
  const onClick = () => {
    setFormData({...formData,show:false})
  }
  const onChange=e=> setFormData({...formData,[e.target.name]:e.target.value})
  const onSubmit=e=> {
    e.preventDefault();
    if(password!==password2)
    alert('Passwords do not match')
    else 
   alert(formData)
  }

  if (show) {
    return (
      <div id="fullscreen-container">
        <div className="form-popup">
          <button className="close" onClick={onClick} >x</button>
          <h1 className="large text-primary">Sign Up</h1>
          <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
          <form className="form" onSubmit={e => onSubmit(e)}>
            <div className="form-group">
              <input autoFocus type="text" placeholder="Name" name="name" value={name} onChange={e => onChange(e)} required />
            </div>
            <div className="form-group">
              <input autoFocus type="email" placeholder="Email Address" value={email} name="email" onChange={e => onChange(e)} required />
              <br />
              <small className="form-text"
              >This site uses Gravatar so if you want a profile image, use a
                Gravatar email</small
              >
            </div>
            <div className="form-group">
              <input
                autoFocus
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={e => onChange(e)}
                minLength="6"
              />
            </div>
            <div className="form-group">
              <input
                autoFocus
                type="password"
                placeholder="Confirm Password"
                name="password2"
                value={password2}
                onChange={e => onChange(e)}
                minLength="6"
              />
            </div>
            <input type="submit" className="btn btn-primary" value="Register" />
          </form>
          <p className="my-1">
            Already have an account? <a href="login.html">Sign In</a>
          </p>
        </div>
      </div>)






  }
  else {
    return (null)
  }
}
export default Register
