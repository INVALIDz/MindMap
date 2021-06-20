import React from 'react'
import './style.css'

const RegisterPopUp=()=>{
    return (
        <div>
        <h2>Signup Form</h2>
        <form action="/action_page.php" style="border:1px solid #ccc">
		<div className="container">
			<label><b>Email</b></label>
			<input type="text" placeholder="Enter Email" name="email" required/>

			<label><b>Password</b></label>
			<input type="password" placeholder="Enter Password" name="psw" required/>

			<label><b>Repeat Password</b></label>
			<input type="password" placeholder="Repeat Password" name="psw-repeat" required/>
			<input type="checkbox" checked="checked"/> Remember me
			<p>To create an account you have to agree our <a href="#">Terms and Privacy</a>.</p>

			<div className="clearfix">
				<button type="button" className="cancelbtn">Cancel</button>
				<button type="submit" className="signupbtn">Sign Up</button>
			</div>
		</div>
       
	</form>
    </div>
                        )
}
export default RegisterPopUp