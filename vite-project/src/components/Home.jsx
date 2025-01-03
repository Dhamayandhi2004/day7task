import "react";
import { Link } from "react-router-dom";


function Home(){
    return(
        <>
        <h1>Welcome to the website</h1>
        <p>are you want to sign in?</p>
        <button>    <Link to='/signup'>singUp</Link>
        </button>
        <p>Are you want to Login?</p>
        <button><Link to="/login">Login</Link></button>
</>
    )
}
export default Home;