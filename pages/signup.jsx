import React, { useState } from 'react';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  signupForm: {

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
  signupButton: {
    background: '#2684FE',
    color: '#fff',
    textTransform: 'initial',
    width: '80%',
  },
}));

const SignUp = () => {
  const signUpStyles = useStyles();
  const [userCredentials, setCredentials] = useState({ email: '', password: '', companyName: '', abn: '' });
  const { email, password, companyName, abn } = userCredentials;
  const handleSubmit = event => {
    console.log(event);
  }
  const handleChange = event => {
    console.log(event);
  }
  return (
    <Card className={signUpStyles.card}>
      <div className='sign-up-left'>

      </div>
      <div className='signup-right'>
        <form className={signUpStyles.signupForm} noValidate autoComplete='off' onSubmit={handleSubmit}>
          <TextField
            id='email'
            label='Email'
            name='email'
            variant='outlined'
            className={signUpStyles.field}
            value={email}
            type='email'
            required
            onChange={handleChange}
          />
          <TextField
            id='companyName'
            label='Company Name'
            name='companyName'
            variant='outlined'
            className={signUpStyles.field}
            value={companyName}
            type='text'
            required
            onChange={handleChange}
          />
          <TextField
            id='abn'
            label='ABN'
            name='abn'
            variant='outlined'
            className={signUpStyles.field}
            value={abn}
            type='text'
            required
            onChange={handleChange}
          />
          <TextField
            id='password'
            label='Password'
            name='password'
            variant='outlined'
            className={signUpStyles.field}
            value={password}
            type='password'
            required
            onChange={handleChange}
            autoComplete='current-password'
          />
          <Button variant='contained' className={signUpStyles.signupButton} type='submit'>Sign up</Button>
        </form>
      </div>
    </Card>
  );
};
export default SignUp;