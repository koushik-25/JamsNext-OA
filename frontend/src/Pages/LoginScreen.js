import { useRef, useState, useEffect, useContext } from 'react';
import AuthContext from "./AuthProvider";

import axios from 'axios';
const LOGIN_URL = '/api/users/login';

const Login = () => {
    const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e) => {
         e.preventDefault();
         console.log(user,pwd);
         try {
           const config = {
             headers:{
               "Content-type":"application/json"
             }
           }
            const {response} = await axios.post('http://localhost:3000/api/users/login',
              {'email':user,'password':pwd},config
             );
             console.log(response?.data);
             console.log(JSON.stringify(response));
             const accessToken = response?.data?.accessToken;
             const roles = response?.data?.roles;
             setAuth({ user, pwd, roles, accessToken });
             setUser('');
             setPwd('');
             setSuccess(true);
         } catch (err) {
             if (!err?.response) {
                 setErrMsg('No Server Response');
             } else if (err.response?.status === 400) {
                 setErrMsg('Missing Username or Password');
             } else if (err.response?.status === 401) {
                 setErrMsg('Unauthorized');
             } else {
                 setErrMsg('Login Failed');
             }
             errRef.current.focus();
         }

    }

    return (
        <>
            {success ? (
                <section>
                    <h1>You are logged in!</h1>
                    <br />
                    <p>
                        <a href="#">Go to Home</a>
                    </p>
                </section>
            ) : (
                <section>
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <h1>Sign In</h1>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required
                        />

                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                        />
                        <button>Sign In</button>
                    </form>
                    <p>
                        Need an Account?<br />
                        <span className="line">
                            <a href="">Sign Up</a>
                        </span>
                    </p>
                </section>
            )}
        </>
    )
}

export default Login
