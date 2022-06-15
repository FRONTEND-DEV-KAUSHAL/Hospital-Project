import React, { useState } from 'react';

function Auth(props) {
    let [usertype, setUsertype] = useState('login');
    let [reset, setReset] = useState(false)
    return (
        <section id="appointment" className="appointment">
            <div className="container">
                <div className="section-title">
                    {
                        reset === true?
                        <h2>Forget Password</h2>
                        :
                        usertype === 'login'?
                        <h2>Login</h2>
                        :
                        <h2>Signup</h2>
                    }
                </div>
                <div className="php-email-form">
                    <div>
                        {
                            reset === true?
                                null
                            :
                            usertype === 'login'?
                                null
                            :
                            <div className="col-md-4 form-group mt-3 mt-md-0">
                            <input type="name" className="form-control" name="name" id="name" placeholder="Your name" data-rule="email" data-msg="Please enter a valid email" />
                            <div className="validate" />
                        </div>
                        }
                        <div className="col-md-4 form-group mt-3 mt-md-0">
                            <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                            <div className="validate" />
                        </div>

                    </div>
                    <div>
                        {
                            reset === true?
                            null
                            :
                            <div className="col-md-4 form-group mt-3 mt-md-0">
                            <input type="password" className="form-control" name="password" id="password" placeholder="Your password" data-rule="password" data-msg="Please enter a valid password" />
                            <div className="validate" />
                        </div>
                        }
                    </div>
                    <div>
                        {
                            reset === true?
                            <>
                            <p className='d-inline-block'>Already Have An Account</p><button onClick={() => {setReset(false);setUsertype('login')}}>Login</button>
                            </>
                            :
                            usertype === 'login'?
                            <>
                                <p className='d-inline-block'>New User? Create An Account</p><button className='ms-3' onClick={() => setUsertype('signup')}>Signup</button>
                                <button className='ms-3' onClick={() => setReset(true)}>Forget Password ?</button>
                            </>
                            :
                            <>
                            <p className='d-inline-block'>Already Have An Account</p><button onClick={() => {setReset(false);setUsertype('login')}}>Login</button>
                        </>
                        }
                    </div>
                    <div className="text-center">
                        {
                            reset === true?
                            <button type="submit">Submit</button>
                            :
                            usertype === 'login'?
                            <button type="submit">Login</button>
                            :
                            <button type="submit">Signup</button>
                        }
                        </div>
                    </div>
                </div>
            </section>


    );
}

export default Auth;