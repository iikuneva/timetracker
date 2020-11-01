import React from 'react'
import Header from '../ui/Header/Header'
import SubHeader from '../ui/SubHeader/SubHeader'
import CardTask from '../ui/CardTask/CardTask'

// Styles
import { withStyles } from '@material-ui/core/styles'
import userHomeStyles from './userHomeStyles'

// Material Components
import {
    Grid
} from '@material-ui/core'

const UserHome = (props) => {
    // const classes = props.classes
    return (

        <Grid container
            justify='center'
        >
            <Grid item xs={12}>
                <Header />
            </Grid>
            <Grid item xs={12}>
                <SubHeader />
            </Grid>
            <Grid item xs={12}>
                <CardTask />
            </Grid>

        </Grid>


    )

}

export default withStyles(userHomeStyles)(UserHome)
