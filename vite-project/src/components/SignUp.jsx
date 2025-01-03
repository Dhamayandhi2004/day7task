import '../assets/css/SignUp.css';
import { Link } from 'react-router-dom';
function submit(){
    alert("form submitted..")
}
function SignUp(){
    return(
    <>
    <h2>Welcome to SignUp page</h2>
    <label className="signup">
    FirstName:<input type="text" placeholder="enter your firstName" />
    </label>
    <label className="signup">
    LastName:<input type="text" placeholder="enter your lastname" />
    </label>
    <label className="signup">
    Email:<input type="text" placeholder="enter your email" />
    </label>
    <label className="signup">
    Password:<input type="password" placeholder="enter your password"/>
    </label>
    <label className="signup">
    Re-type password:<input type="password" placeholder="enter your password" />
    </label>
    <button onClick={submit}>Submit</button>
    <button ><Link to="/">back</Link></button>

    </>
    )
}
export default SignUp;