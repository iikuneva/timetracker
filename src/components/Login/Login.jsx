import React, { useState } from 'react'

// Material Components
import {
    Button,
    Link,
    Grid,
    TextField,
    Typography,
    InputAdornment,
    Divider
} from '@material-ui/core'

// Styles
import { useTheme, withStyles } from '@material-ui/core/styles'
import loginStyles from './loginStyles'

//Icons
import PersonIcon from '@material-ui/icons/Person'
import LockIcon from '@material-ui/icons/Lock'
import googleIcon from '../../assets/google.svg'



const Login = (props) => {

    //is it necessary here?
    const theme = useTheme()

    const classes = props.classes
    // const { classes } = props

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
            direction='column'
            // justify='center'
            alignItems='center'
            spacing={6}
            // style={{ marginTop: '3em' }}
            className={classes.mainContainer}
        >
            <Grid item>
                <Typography variant="h3">
                    LOGIN
                </Typography>
            </Grid>
            <Grid item>
            <form>
                <Grid
                    container
                    direction='column'
                    spacing={3}
                >
                    <Grid item>
                        <TextField
                            placeholder='Username'
                            id='username'
                            type='text'
                            required
                            value={username}
                            onChange={event => setUsername(event.target.value)}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <PersonIcon />
                                    </InputAdornment>
                                )
                            }}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            placeholder='Password'
                            id='password'
                            type='password'
                            required
                            fullWidth
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
                    <Grid item>
                        <Button
                            disabled={
                                username.length === 0 ||
                                password.length === 0
                            }
                            fullWidth={true}
                            variant='contained'
                            color='secondary'
                            type='submit'
                        >
                            LOGIN
                </Button>
                    </Grid>
                </Grid>
            </form>
            </Grid>
            <Divider variant="middle"/>
            <Grid item>
                <Button
                    variant='outlined'
                    color='primary'
                    fullWidth={true}
                >
                    {googleBtnContents}
                </Button>
            </Grid>
            <Grid
                container
                direction='column'
                justify='center'
            >
                <Grid item>
                    <Link href="#" className={classes.link}>
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
