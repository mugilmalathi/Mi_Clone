import  React from "react"

import "../Login/login.css"
function Login(){
    return (
        <div><br/>
        <form><input className="input" placeholder="Email" type="email" /><br/><br/><br/>
<input className="input" placeholder="Password" type="password"  /><br/><br/><br/>
<button className="buttsignin" >Sign in</button></form>

<h3 className="forget">Forgot password?</h3>
<h3 className="op">More options</h3>

        </div>
    )
}
export default Login;