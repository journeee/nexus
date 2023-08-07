import './Signup.css';
import {motion} from "framer-motion";
import {useState} from "react";
import {Link, useNavigate} from 'react-router-dom';

import Navbar from '../../UniversalComponents/Navbar';

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import firebase from '../../firebase';

function Signup() {
    const navigate = useNavigate();
    const auth = getAuth();

    const [passwordVisibility, setPasswordVisibility] = useState('password');
    const [confirmPasswordVisibility, setConfirmPasswordVisibility] = useState('password');
    const [tosStatus, setTosStatus] = useState(false);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleCreateAccount = () => {
        if (name === '') {
            setError('Please enter your name');
        } else if (email === '') {
            setError('Please enter your email');
        } else if (password === '') {
            setError('Please enter your password');
        } else if (!(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/.test(password))) {
            setError('Password must be more than 8 characters and have one capital letter, one number and one special character')
        } else if (password !== confirmPassword) {
            setError('Your password and confirmed password does not match');
        } else if (!tosStatus) {
            setError('You need to agree with our terms & conditions');
        } else {
            setError('')
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    navigate('/dashboard');
                })
                .catch((error) => {
                    const errorMessage = error.message;
                    if (errorMessage === 'Firebase: Error (auth/email-already-in-use).') {
                        setError('This email is already connected to an account')
                    }
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

    const handleChangeConfirmPasswordVisibility = () => {
        if (confirmPasswordVisibility === 'password') {
            setConfirmPasswordVisibility('text');
        } else {
            setConfirmPasswordVisibility('password');
        }
    }

    return (
        <div className="signup-container">
            <Navbar />
            <div className="signup-content-container">
                <div className="signup-form-container">
                    <motion.div className="signup-form" initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1.5, delay: 0.2}}>
                        <p className="signup-title">Welcome to The Nexus!</p>
                        <div className="signup-input">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                                <path d="M13.646 11.2155C14.6264 10.4442 15.342 9.38642 15.6933 8.18944C16.0445 6.99246 16.014 5.71576 15.6058 4.53696C15.1977 3.35817 14.4323 2.33589 13.4161 1.61235C12.3999 0.888815 11.1835 0.5 9.93603 0.5C8.68858 0.5 7.47215 0.888815 6.45596 1.61235C5.43978 2.33589 4.67438 3.35817 4.26624 4.53696C3.85811 5.71576 3.82754 6.99246 4.17879 8.18944C4.53004 9.38642 5.24564 10.4442 6.22603 11.2155C4.54611 11.8885 3.08032 13.0048 1.98492 14.4454C0.88953 15.886 0.205595 17.5968 0.00603184 19.3955C-0.00841357 19.5268 0.00314838 19.6597 0.0400573 19.7866C0.0769662 19.9134 0.138499 20.0317 0.221143 20.1348C0.388051 20.343 0.630815 20.4763 0.896032 20.5055C1.16125 20.5347 1.42719 20.4573 1.63536 20.2904C1.84352 20.1235 1.97686 19.8807 2.00603 19.6155C2.22562 17.6607 3.15772 15.8553 4.62425 14.5443C6.09078 13.2333 7.98893 12.5085 9.95603 12.5085C11.9231 12.5085 13.8213 13.2333 15.2878 14.5443C16.7543 15.8553 17.6864 17.6607 17.906 19.6155C17.9332 19.8612 18.0505 20.0882 18.2351 20.2525C18.4198 20.4169 18.6588 20.507 18.906 20.5055H19.016C19.2782 20.4753 19.5178 20.3428 19.6826 20.1367C19.8474 19.9307 19.9241 19.6679 19.896 19.4055C19.6955 17.6017 19.0079 15.8865 17.9069 14.4437C16.8059 13.0009 15.3329 11.885 13.646 11.2155ZM9.93603 10.5055C9.14491 10.5055 8.37155 10.2709 7.71375 9.83137C7.05595 9.39185 6.54326 8.76713 6.24051 8.03623C5.93776 7.30533 5.85855 6.50106 6.01289 5.72513C6.16723 4.94921 6.54819 4.23648 7.1076 3.67707C7.66701 3.11766 8.37975 2.7367 9.15567 2.58235C9.93159 2.42801 10.7359 2.50723 11.4668 2.80998C12.1977 3.11273 12.8224 3.62542 13.2619 4.28321C13.7014 4.94101 13.936 5.71437 13.936 6.5055C13.936 7.56636 13.5146 8.58378 12.7645 9.33392C12.0143 10.0841 10.9969 10.5055 9.93603 10.5055Z" fill="#1A1A2E"/>
                            </svg>
                            <input className="signup-input-placeholder" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
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
                        <div className="signup-input">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="22" viewBox="0 0 16 22" fill="none">
                                <path d="M8 16.5C7.46957 16.5 6.96086 16.2893 6.58579 15.9142C6.21071 15.5391 6 15.0304 6 14.5C6 13.39 6.89 12.5 8 12.5C8.53043 12.5 9.03914 12.7107 9.41421 13.0858C9.78929 13.4609 10 13.9696 10 14.5C10 15.0304 9.78929 15.5391 9.41421 15.9142C9.03914 16.2893 8.53043 16.5 8 16.5ZM14 19.5V9.5H2V19.5H14ZM14 7.5C14.5304 7.5 15.0391 7.71071 15.4142 8.08579C15.7893 8.46086 16 8.96957 16 9.5V19.5C16 20.0304 15.7893 20.5391 15.4142 20.9142C15.0391 21.2893 14.5304 21.5 14 21.5H2C1.46957 21.5 0.960859 21.2893 0.585786 20.9142C0.210714 20.5391 0 20.0304 0 19.5V9.5C0 8.39 0.89 7.5 2 7.5H3V5.5C3 4.17392 3.52678 2.90215 4.46447 1.96447C5.40215 1.02678 6.67392 0.5 8 0.5C8.65661 0.5 9.30679 0.629329 9.91342 0.880602C10.52 1.13188 11.0712 1.50017 11.5355 1.96447C11.9998 2.42876 12.3681 2.97995 12.6194 3.58658C12.8707 4.19321 13 4.84339 13 5.5V7.5H14ZM8 2.5C7.20435 2.5 6.44129 2.81607 5.87868 3.37868C5.31607 3.94129 5 4.70435 5 5.5V7.5H11V5.5C11 4.70435 10.6839 3.94129 10.1213 3.37868C9.55871 2.81607 8.79565 2.5 8 2.5Z" fill="#1A1A2E"/>
                            </svg>
                            <input className="signup-input-placeholder" placeholder="Confirm Password" type={confirmPasswordVisibility} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
                            {confirmPasswordVisibility === 'password' ? <svg style={{cursor: "pointer"}} onClick={handleChangeConfirmPasswordVisibility} xmlns="http://www.w3.org/2000/svg" width="22" height="16" viewBox="0 0 22 16" fill="none">
                                <path d="M11 2.5C12.8387 2.49389 14.6419 3.00678 16.2021 3.97973C17.7624 4.95267 19.0164 6.34616 19.82 8C18.17 11.37 14.8 13.5 11 13.5C7.2 13.5 3.83 11.37 2.18 8C2.98362 6.34616 4.23763 4.95267 5.79788 3.97973C7.35813 3.00678 9.16126 2.49389 11 2.5ZM11 0.5C6 0.5 1.73 3.61 0 8C1.73 12.39 6 15.5 11 15.5C16 15.5 20.27 12.39 22 8C20.27 3.61 16 0.5 11 0.5ZM11 5.5C11.663 5.5 12.2989 5.76339 12.7678 6.23223C13.2366 6.70107 13.5 7.33696 13.5 8C13.5 8.66304 13.2366 9.29893 12.7678 9.76777C12.2989 10.2366 11.663 10.5 11 10.5C10.337 10.5 9.70107 10.2366 9.23223 9.76777C8.76339 9.29893 8.5 8.66304 8.5 8C8.5 7.33696 8.76339 6.70107 9.23223 6.23223C9.70107 5.76339 10.337 5.5 11 5.5ZM11 3.5C8.52 3.5 6.5 5.52 6.5 8C6.5 10.48 8.52 12.5 11 12.5C13.48 12.5 15.5 10.48 15.5 8C15.5 5.52 13.48 3.5 11 3.5Z" fill="#1A1A2E"/>
                            </svg>
                            :
                            <svg style={{cursor: "pointer"}} onClick={handleChangeConfirmPasswordVisibility} fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="m2 2 20 20"/><path d="m6.71277 6.7226c-3.04798 2.07267-4.71277 5.2774-4.71277 5.2774s3.63636 7 10 7c2.0503 0 3.8174-.7266 5.2711-1.7116m-6.2711-12.23018c.3254-.03809.6588-.05822 1-.05822 6.3636 0 10 7 10 7s-.6918 1.3317-2 2.8335"/><path d="m14 14.2362c-.5308.475-1.2316.7639-2 .7639-1.6569 0-3-1.3431-3-3 0-.8237.33193-1.5698.86932-2.11192"/></g></svg>
                            }
                            </div>
                        {error ? <p className="term-agreement-sub-text">{error}</p> : ''}
                        <div className="term-agreement">
                            <svg style={{cursor: "pointer"}} onClick={() => setTosStatus(!tosStatus)} xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                                <path d="M13.22 6.79L8.93001 11.09L7.28 9.44C7.19036 9.33532 7.08004 9.2503 6.95597 9.19027C6.83191 9.13025 6.69678 9.09652 6.55906 9.0912C6.42134 9.08588 6.28401 9.10909 6.15568 9.15936C6.02736 9.20964 5.91081 9.28589 5.81335 9.38335C5.7159 9.4808 5.63964 9.59735 5.58937 9.72568C5.53909 9.854 5.51589 9.99133 5.52121 10.1291C5.52653 10.2668 5.56026 10.4019 5.62028 10.526C5.6803 10.65 5.76532 10.7604 5.87 10.85L8.22 13.21C8.31344 13.3027 8.42426 13.376 8.5461 13.4258C8.66794 13.4755 8.7984 13.5008 8.93001 13.5C9.19234 13.4989 9.44374 13.3947 9.63 13.21L14.63 8.21C14.7237 8.11704 14.7981 8.00644 14.8489 7.88458C14.8997 7.76272 14.9258 7.63201 14.9258 7.5C14.9258 7.36799 14.8997 7.23728 14.8489 7.11542C14.7981 6.99356 14.7237 6.88296 14.63 6.79C14.4426 6.60375 14.1892 6.49921 13.925 6.49921C13.6608 6.49921 13.4074 6.60375 13.22 6.79ZM10.5 0C8.52219 0 6.58879 0.58649 4.9443 1.6853C3.29981 2.78412 2.01809 4.3459 1.26121 6.17317C0.504333 8.00043 0.306299 10.0111 0.692152 11.9509C1.078 13.8907 2.03041 15.6725 3.42894 17.0711C4.82746 18.4696 6.60929 19.422 8.5491 19.8079C10.4889 20.1937 12.4996 19.9957 14.3268 19.2388C16.1541 18.4819 17.7159 17.2002 18.8147 15.5557C19.9135 13.9112 20.5 11.9778 20.5 10C20.5 8.68678 20.2413 7.38642 19.7388 6.17317C19.2363 4.95991 18.4997 3.85752 17.5711 2.92893C16.6425 2.00035 15.5401 1.26375 14.3268 0.761205C13.1136 0.258658 11.8132 0 10.5 0ZM10.5 18C8.91775 18 7.37104 17.5308 6.05544 16.6518C4.73985 15.7727 3.71447 14.5233 3.10897 13.0615C2.50347 11.5997 2.34504 9.99113 2.65372 8.43928C2.9624 6.88743 3.72433 5.46197 4.84315 4.34315C5.96197 3.22433 7.38743 2.4624 8.93928 2.15372C10.4911 1.84504 12.0997 2.00346 13.5615 2.60896C15.0233 3.21447 16.2727 4.23984 17.1518 5.55544C18.0308 6.87103 18.5 8.41775 18.5 10C18.5 12.1217 17.6572 14.1566 16.1569 15.6569C14.6566 17.1571 12.6217 18 10.5 18Z" fill={!tosStatus ? "#1A1A2E" : "#FF236B"}/>
                            </svg>
                            <p className="term-agreement-text">I’ve read and agree to <span className="term-agreement-sub-text">Terms & Conditions</span> </p>
                        </div>
                        <motion.div onClick={handleCreateAccount} initial={{background: "#FF236B"}}
                                    whileHover={{background: "#fff"}} className="signup-button"><motion.span initial={{color: "#fff"}} whileHover={{color: "#FF236B"}} className="signup-button-text">CREATE ACCOUNT</motion.span></motion.div>
                        <p className="tosignin">Already have an account? <Link to="/signin" style={{textDecoration: 'none'}}><span className="signin-link">Sign In</span></Link></p>

                    </motion.div>

                     <div className="signup-image">
                         <div id="signup-image-overlay"></div>
                     </div>

                </div>
            </div>
        </div>
    );
}

export default Signup;
