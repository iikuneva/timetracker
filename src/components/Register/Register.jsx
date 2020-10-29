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
import registerStyles from './registerStyles'

//Icons
import PersonIcon from '@material-ui/icons/Person'
import LockIcon from '@material-ui/icons/Lock'
import googleIcon from '../../assets/google.svg'
import EmailIcon from '@material-ui/icons/Email'


const Register = (props) => {

    const classes = props.classes

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repeat, setRepeat] = useState('')


    const googleBtnContents = (
        <>
            <img src={googleIcon} alt="google icon" className={classes.icon} />
          Register with Google
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
                    <Typography variant="h3">
                        Register
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
                                    placeholder='Email'
                                    id='email'
                                    type='email'
                                    required
                                    fullWidth={true}
                                    value={email}
                                    onChange={event => setEmail(event.target.value)}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <EmailIcon />
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
                                <TextField
                                    placeholder='Repeat password'
                                    id='repeat'
                                    type='password'
                                    required
                                    fullWidth={true}
                                    value={repeat}
                                    onChange={event => setRepeat(event.target.value)}
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
                                        email.length === 0 ||
                                        password.length === 0 ||
                                        repeat.length === 0
                                    }
                                    fullWidth={true}
                                    variant='contained'
                                    color='primary'
                                    type='submit'
                                >
                                    REGISTER
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
                    <Link href='/login' className={classes.link}>
                        Already have an account?
                    </Link>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default withStyles(registerStyles)(Register)
