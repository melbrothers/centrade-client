import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCurrentUser } from '../redux/user/user.selectors';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import { SnackbarProvider, useSnackbar } from 'notistack';

import { makeStyles } from '@material-ui/core/styles';
import { emailSignInStart } from '../redux/user/user.actions.js';
import { useRouter } from 'next/router';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: 200,
    },
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%'
  },
  card: {
    minWidth: 375,
    maxWidth: '55%',
    margin: '30vh auto',
    // height: '80vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 32.5,
    fontWeight: 'bold',
    color: '#007DE9',
    textTransform: 'uppercase'
  },
  pos: {
    marginBottom: 12,
  },
  field: {
    width: '80%',
  },
  legendBox: {
    width: '135px',
    height: '135px',
    backgroundColor: '#007DE9',
    margin: '20px auto',
  },
  legendBoxText: {
    fontSize: '98px',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    display: 'grid',
    gridColumn: '1'
  },
  createAccountLink: {
    display: 'inline-block',
    color: '#2684FE',
    fontStyle: 'italic',
    textDecoration: 'underline',
    cursor: 'pointer',
  },
  forgotPasswordLink: {
    display: 'inline-block',
    textDecoration: 'underline',
    cursor: 'pointer',
  },
  signInButton: {
    background: '#2684FE',
    color: '#fff',
    textTransform: 'initial',
    width: '80%',
  },
}));

const SignIn = ({ currentUser, emailSignInStart }) => {
  const classes = useStyles();
  const [userCredentials, setCredentials] = useState({ email: '', password: '' });
  const { email, password } = userCredentials;
  const router = useRouter();

  useEffect(() => {
    console.log(currentUser);
    if (currentUser && currentUser.token) {
      router.push('/');
    }
    // return () => {
    //   cleanup
    // };
  }, [currentUser]);

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
    <Card className={classes.card}>
      <div className={classes.legendBox}><span className={classes.legendBoxText}>L</span></div>
      <h1 className={classes.title}>Legend</h1>
      <h2>Login to your account</h2>
      <p>Already have an account? Sign in Now</p>
      <form className={classes.root} noValidate autoComplete='off' onSubmit={handleSubmit}>
        <TextField
          id='email'
          label='Email'
          name='email'
          variant='outlined'
          className={classes.field}
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
          className={classes.field}
          value={password}
          type='password'
          required
          onChange={handleChange}
          autoComplete='current-password'
        />
        <Button variant='contained' className={classes.signInButton} type='submit'>Sign In</Button>
      </form>
      <h4>Don't have an account? <span className={classes.createAccountLink} onClick={onClickHandleCreateAccount}>Create account</span></h4>
      <p className={classes.forgotPasswordLink}>Forgot password?</p>
    </Card>
  )
};


const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);