import React from 'react'

// Custom components
import Header from '../../components/Header/Header'
import SubHeader from '../../components/SubHeader/SubHeader'
import Project from '../../components/Project/Project'

// Styles
import { withStyles } from '@material-ui/core/styles'
import userHomeStyles from './userHomeStyles'

// Material Components
import {
    Grid
} from '@material-ui/core'

// Mock Data
import projectsData from '../../js/mock/mockProjectPM.js'

const UserHome = (props) => {

    return (
        <>
            <Grid container
                justify='center'
                alignItems='center'
                spacing={4}
            >
                <Grid item xs={12}>
                    <Header />
                </Grid>
                <Grid item xs={12} container justify='center' alignItems='center'>
                    <SubHeader />
                </Grid>
                <Grid
                    item
                    container
                    justify='center'
                    xs={12}>
                    {
                        projectsData.map(project => {
                            return (
                                <Project key={project.projectId}
                                    name={project.name}
                                    projectId={project.projectId}
                                    tasks={[...project.tasks]} />
                            )
                        })
                    }
                </Grid>
            </Grid>
        </>

    )

}

export default withStyles(userHomeStyles)(UserHome)
