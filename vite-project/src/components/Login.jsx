import '../assets/css/Login.css';
import { Link } from 'react-router-dom';
function Login(){
    return(
    <>
    <h3>Welcome to login page</h3>
    <label className='login'>
    Email:<input type="text" placeholder="enter your email" />
    </label>
    <label className='login'>
    password:<input type="password" placeholder="enter your password" />
    </label>
    <button ><Link to="/">back</Link></button>

    </>
    );
}
export default Login;