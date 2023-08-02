import './Signin.css';
import {motion} from "framer-motion";
import {useState} from "react";
import {Link} from 'react-router-dom';

import Navbar from '../../UniversalComponents/Navbar';

import firebase from '../../firebase';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

function Signin() {
    const auth = getAuth()

    const [passwordVisibility, setPasswordVisibility] = useState('password');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');


    const handleSignIn = () => {
        if (email === '') {
            setError('Please enter your email');
        } else if (password === '') {
            setError('Please enter your password');
        } else {
            setError('')
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                })
                .catch((error) => {
                    // const errorCode = error.code;
                    // const errorMessage = error.message;
                    setError("Email or password do not match our records");
                });
        }
    }

    const handleChangePasswordVisibility = () => {
        if (passwordVisibility === 'password') {
            setPasswordVisibility('text');
        } else {
            setPasswordVisibility('password');
        }
    }

    return (
        <div className="signup-container">
            <Navbar />
            <div className="signup-content-container">
                <div className="signup-form-container">
                    <motion.div className="signup-form" initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1.5, delay: 0.2}}>
                        <div className="signin-div">
                            <div className="signin-image"></div>
                            <p className="signin-title">Welcome to The Nexus!</p>
                        </div>
                        <div className="signup-input">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17" fill="none">
                                <path d="M1 3.5C1 2.96957 1.21071 2.46086 1.58579 2.08579C1.96086 1.71071 2.46957 1.5 3 1.5H17C17.5304 1.5 18.0391 1.71071 18.4142 2.08579C18.7893 2.46086 19 2.96957 19 3.5M1 3.5V13.5C1 14.0304 1.21071 14.5391 1.58579 14.9142C1.96086 15.2893 2.46957 15.5 3 15.5H17C17.5304 15.5 18.0391 15.2893 18.4142 14.9142C18.7893 14.5391 19 14.0304 19 13.5V3.5M1 3.5L10 9.5L19 3.5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <input className="signup-input-placeholder" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <div className="signup-input">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="22" viewBox="0 0 16 22" fill="none">
                                <path d="M8 16.5C7.46957 16.5 6.96086 16.2893 6.58579 15.9142C6.21071 15.5391 6 15.0304 6 14.5C6 13.39 6.89 12.5 8 12.5C8.53043 12.5 9.03914 12.7107 9.41421 13.0858C9.78929 13.4609 10 13.9696 10 14.5C10 15.0304 9.78929 15.5391 9.41421 15.9142C9.03914 16.2893 8.53043 16.5 8 16.5ZM14 19.5V9.5H2V19.5H14ZM14 7.5C14.5304 7.5 15.0391 7.71071 15.4142 8.08579C15.7893 8.46086 16 8.96957 16 9.5V19.5C16 20.0304 15.7893 20.5391 15.4142 20.9142C15.0391 21.2893 14.5304 21.5 14 21.5H2C1.46957 21.5 0.960859 21.2893 0.585786 20.9142C0.210714 20.5391 0 20.0304 0 19.5V9.5C0 8.39 0.89 7.5 2 7.5H3V5.5C3 4.17392 3.52678 2.90215 4.46447 1.96447C5.40215 1.02678 6.67392 0.5 8 0.5C8.65661 0.5 9.30679 0.629329 9.91342 0.880602C10.52 1.13188 11.0712 1.50017 11.5355 1.96447C11.9998 2.42876 12.3681 2.97995 12.6194 3.58658C12.8707 4.19321 13 4.84339 13 5.5V7.5H14ZM8 2.5C7.20435 2.5 6.44129 2.81607 5.87868 3.37868C5.31607 3.94129 5 4.70435 5 5.5V7.5H11V5.5C11 4.70435 10.6839 3.94129 10.1213 3.37868C9.55871 2.81607 8.79565 2.5 8 2.5Z" fill="#1A1A2E"/>
                            </svg>
                            <input className="signup-input-placeholder" placeholder="Password" type={passwordVisibility} value={password} onChange={(e) => setPassword(e.target.value)}/>

                            {passwordVisibility === 'password' ? <svg style={{cursor: "pointer"}} onClick={handleChangePasswordVisibility} xmlns="http://www.w3.org/2000/svg" width="22" height="16" viewBox="0 0 22 16" fill="none">
                                    <path d="M11 2.5C12.8387 2.49389 14.6419 3.00678 16.2021 3.97973C17.7624 4.95267 19.0164 6.34616 19.82 8C18.17 11.37 14.8 13.5 11 13.5C7.2 13.5 3.83 11.37 2.18 8C2.98362 6.34616 4.23763 4.95267 5.79788 3.97973C7.35813 3.00678 9.16126 2.49389 11 2.5ZM11 0.5C6 0.5 1.73 3.61 0 8C1.73 12.39 6 15.5 11 15.5C16 15.5 20.27 12.39 22 8C20.27 3.61 16 0.5 11 0.5ZM11 5.5C11.663 5.5 12.2989 5.76339 12.7678 6.23223C13.2366 6.70107 13.5 7.33696 13.5 8C13.5 8.66304 13.2366 9.29893 12.7678 9.76777C12.2989 10.2366 11.663 10.5 11 10.5C10.337 10.5 9.70107 10.2366 9.23223 9.76777C8.76339 9.29893 8.5 8.66304 8.5 8C8.5 7.33696 8.76339 6.70107 9.23223 6.23223C9.70107 5.76339 10.337 5.5 11 5.5ZM11 3.5C8.52 3.5 6.5 5.52 6.5 8C6.5 10.48 8.52 12.5 11 12.5C13.48 12.5 15.5 10.48 15.5 8C15.5 5.52 13.48 3.5 11 3.5Z" fill="#1A1A2E"/>
                                </svg>
                                :
                                <svg style={{cursor: "pointer"}} onClick={handleChangePasswordVisibility} fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="m2 2 20 20"/><path d="m6.71277 6.7226c-3.04798 2.07267-4.71277 5.2774-4.71277 5.2774s3.63636 7 10 7c2.0503 0 3.8174-.7266 5.2711-1.7116m-6.2711-12.23018c.3254-.03809.6588-.05822 1-.05822 6.3636 0 10 7 10 7s-.6918 1.3317-2 2.8335"/><path d="m14 14.2362c-.5308.475-1.2316.7639-2 .7639-1.6569 0-3-1.3431-3-3 0-.8237.33193-1.5698.86932-2.11192"/></g></svg>
                            }
                        </div>
                        {error ? <p className="term-agreement-sub-text">{error}</p> : ''}
                        <motion.div onClick={handleSignIn} initial={{background: "#FF236B"}}
                                    whileHover={{background: "#fff"}} className="signup-button"><motion.span initial={{color: "#fff"}} whileHover={{color: "#FF236B"}} className="signup-button-text">LOG IN</motion.span></motion.div>
                        <p className="tosignin">Don't have an account? <Link to="/signup" style={{textDecoration: 'none'}}><span className="signin-link">Register now</span></Link></p>

                    </motion.div>

                    <div className="signup-image">
                        <div id="signup-image-overlay"></div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Signin;
