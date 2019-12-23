import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { useRouter } from 'next/router';

import { selectCurrentUser, selectError } from '../redux/user/user.selectors';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import { useSnackbar } from 'notistack';
import Link from 'next/link';

import { emailSignInStart } from '../redux/user/user.actions.js';

import '../styles/signin.styles.scss';

const SignIn = ({ currentUser, emailSignInStart, error }) => {
  const [userCredentials, setCredentials] = useState({ email: '', password: '' });
  const { email, password } = userCredentials;
  const router = useRouter();

  const handleLoginNotify = async (message) => {
    // variant could be success, error, warning, info, or default
    await enqueueSnackbar(`Login error: ${message}`);

  };

  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    document.body.classList.add('signin-page');
    if (currentUser) {
      document.body.classList.remove('signin-page');
      router.push('/');
    } else {
      if (error) {
        handleLoginNotify(error);
      }
    }
  }, [currentUser, error]);


  const handleSubmit = async event => {
    event.preventDefault();

    emailSignInStart(email, password);

  }

  const handleChange = event => {
    const { value, name } = event.target;
    setCredentials({ ...userCredentials, [name]: value });
  }

  const onClickHandleCreateAccount = event => {
    router.push('/signup');
  }

  return (
    <Card className='card'>
      <div className='legend-box'><span className='legendbox-text'>L</span></div>
      <h1 className='title'>Legend</h1>
      <h2>Login to your account</h2>
      <p>Already have an account? Sign in Now</p>
      <form className='root' noValidate autoComplete='off' onSubmit={handleSubmit}>
        <TextField
          id='email'
          label='Email'
          name='email'
          variant='outlined'
          className='field'
          value={email}
          type='email'
          required
          onChange={handleChange}
        />
        <TextField
          id='password'
          label='Password'
          name='password'
          variant='outlined'
          className='field'
          value={password}
          type='password'
          required
          onChange={handleChange}
          autoComplete='current-password'
        />
        <Button variant='contained' className='signin-button' type='submit'>Sign In</Button>
      </form>
      <h4>Don't have an account? <Link href='/signup'><a>Create account</a></Link></h4>
      <Link href='#'><a>Forgot password?</a></Link>
    </Card>
  )
};


const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  error: selectError
});

const mapDispatchToProps = dispatch => ({
  emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);