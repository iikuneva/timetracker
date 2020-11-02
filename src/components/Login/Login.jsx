import React, { useState } from 'react'

// Material Components
import {
    Button,
    Link,
    Grid,
    TextField,
    Typography,
    InputAdornment
} from '@material-ui/core'

// Styles
import { withStyles } from '@material-ui/core/styles'
import loginStyles from './loginStyles'

//Icons
import PersonIcon from '@material-ui/icons/Person'
import LockIcon from '@material-ui/icons/Lock'
import googleIcon from '../../assets/google.svg'


const Login = (props) => {

    const classes = props.classes

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')


    const googleBtnContents = (
        <>
            <img src={googleIcon} alt="google icon" className={classes.icon} />
          Login with Google
        </>
    );

    return (
        <Grid
            container
            justify='center'
            alignItems='center'
            spacing={3}
            className={classes.mainContainer}
        >

            <Grid item container xs={12} md={3} spacing={3} justify='center'>
                <Grid item xs={10}>
                    <Typography variant='h3'>
                        Login
                    </Typography>
                </Grid>
                <Grid item xs={10}>
                    <form>
                        <Grid
                            container
                            spacing={3}
                        >
                            <Grid item xs={12}>
                                <TextField
                                    placeholder='Username'
                                    id='username'
                                    type='text'
                                    required
                                    fullWidth={true}
                                    value={username}
                                    onChange={event => setUsername(event.target.value)}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <PersonIcon />
                                            </InputAdornment>
                                        )
                                    }}
                                    inputProps={{ className: classes.input }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    placeholder='Password'
                                    id='password'
                                    type='password'
                                    required
                                    fullWidth={true}
                                    value={password}
                                    onChange={event => setPassword(event.target.value)}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <LockIcon />
                                            </InputAdornment>
                                        )
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button
                                    disabled={
                                        username.length === 0 ||
                                        password.length === 0
                                    }
                                    fullWidth={true}
                                    variant='contained'
                                    color='primary'
                                    type='submit'
                                >
                                    LOGIN
                            </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Grid>
                <Grid item container justify='center' xs={10}>
                    <span className={classes.hrLine}>or</span>
                </Grid>
                <Grid item xs={10}>
                    <Button
                        variant='outlined'
                        color='primary'
                        fullWidth={true}
                    >
                        {googleBtnContents}
                    </Button>
                </Grid>
            </Grid>

            <Grid item
                container
                direction='column'
                justify='center'
            >
                <Grid item>
                    <Link href='/register' className={classes.link} >
                        Don't have an account yet?
                    </Link>
                </Grid>
                <Grid item>
                    <Link href="#" className={classes.link}>
                        Forgot your password?
                    </Link>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default withStyles(loginStyles)(Login)
