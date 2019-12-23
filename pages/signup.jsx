import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useRouter } from 'next/router';

import { createStructuredSelector } from 'reselect';
import { selectCurrentUser, selectError } from '../redux/user/user.selectors';
import { signUpStart } from '../redux/user/user.actions.js';

import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link';

import Footer from '../components/Footer/Footer';

import '../styles/signup.styles.scss';


const SignUp = ({ emailSignUpStart, currentUser, error }) => {
  const router = useRouter();
  const [userCredentials, setCredentials] = useState({ email: '', password: '', companyName: '', abn: '' });
  const { email, password, companyName, abn } = userCredentials;


  useEffect(() => {
    document.body.classList.add('signup-page');
    if (currentUser) {
      document.body.classList.remove('signup-page');
      router.push('/');
    }
  }, [currentUser]);

  const handleSubmit = event => {
    event.preventDefault();
    emailSignUpStart(email, password, companyName, abn);
  }
  const handleChange = event => {
    const { value, name } = event.target;
    setCredentials({ ...userCredentials, [name]: value });
  }
  return (
    <div className='signup'>
      <Card className='signup-card'>
        <div className='signup-left'>
        </div>
        <div className='signup-right'>
          <form className='signup-form' noValidate autoComplete='off' onSubmit={handleSubmit}>
            <Typography variant="h4" component="h2" gutterBottom className='signup-title'>
              Legend
          </Typography>
            <Typography variant="body1" component="h3" gutterBottom>
              Create your new account
          </Typography>

            <TextField
              error={error && error.includes('email')}
              id='email'
              label='Email'
              name='email'
              variant='outlined'
              className='field'
              value={email}
              type='email'
              required
              onChange={handleChange}
              helperText={error ? error : null}
            />
            <TextField
              error={error && error.includes('name')}
              id='companyName'
              label='Company Name'
              name='companyName'
              variant='outlined'
              className='field'
              value={companyName}
              type='text'
              required
              onChange={handleChange}
              helperText={error ? error : null}
            />
            <TextField
              error={error && error.includes('abn')}
              id='abn'
              label='ABN'
              name='abn'
              variant='outlined'
              className='field'
              value={abn}
              type='text'
              required
              onChange={handleChange}
              helperText={error ? error : null}
            />
            <TextField
              error={error && error.includes('password')}
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
              helperText={error ? error : null}
            />
            <Button variant='contained' className='signup-button' type='submit'>Create Account</Button>
            <h4>Have an account? <Link href='/signin'><a>Signin now</a></Link></h4>
          </form>
        </div>
      </Card>
      <Footer />
    </div>

  );
};
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  error: selectError
});
const mapDispatchToProps = dispatch => ({
  emailSignUpStart: (email, password, name, abn) => dispatch(signUpStart({ email, password, name, abn }))
});
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);