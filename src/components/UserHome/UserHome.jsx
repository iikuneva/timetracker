import React from 'react'
import Header from '../ui/Header/Header'
import SubHeader from '../ui/SubHeader/SubHeader'
import CardTask from '../ui/CardTask/CardTask'
import Project from '../ui/Project/Project'

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
        <>
            <Grid container
                justify='center'
                spacing={8}
            >
                <Grid item xs={12} style={{paddingBottom: 0}}>
                <Header />
                </Grid>
                <Grid item xs={12} container justify='center' alignItems='center'>
                    <SubHeader />
                </Grid>
                <Project />
            </Grid>
        </>


    )

}

export default withStyles(userHomeStyles)(UserHome)
