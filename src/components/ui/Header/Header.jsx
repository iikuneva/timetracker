import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import {
    AppBar,
    Toolbar,
    Tabs,
    Tab,
    Button
} from '@material-ui/core'

// Styles
import { withStyles } from '@material-ui/core/styles'
import headerStyles from './headerStyles'

//Icons
import PersonAccountIcon from '@material-ui/icons/AccountCircle'


const Header = (props) => {

    const classes = props.classes

    const [value, setValue] = useState(0);

    const handleChange = (e, newValue) => {
        setValue(newValue)
      }

    return (
        <AppBar position="fixed" className={classes.appbar}>
            <Toolbar>
                <Button
                    component={Link}
                    to="/"
                    className={classes.logoContainer}
                >
                    Tracker
                </Button>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    className={classes.tabContainer}
                    indicatorColor='primary'
                >
                    <Tab 
                    icon={<PersonAccountIcon className={classes.icon}/>} 
                    label='Sara Bareilles'
                    />
                </Tabs>
            </Toolbar>
        </AppBar>
    )
}

export default withStyles(headerStyles)(Header)

