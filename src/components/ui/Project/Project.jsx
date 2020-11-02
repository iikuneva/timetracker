import React from 'react'

// Material Components
import { Typography, Grid } from '@material-ui/core'

import tasksData from '../../../test/mock/mockCardTaskData.js'
import CardTask from '../CardTask/CardTask'

// Styles
import { withStyles } from '@material-ui/core/styles'
import projectStyles from './projectStyles'


const Project = (props) => {

    // const { project } = props
    const { classes } = props

    return (
        <Grid
            item
            container
            spacing={3}
            direction='row'
            justify="center"
            alignItems="center"
            xs={12}
            style={{ backgroundColor: '#EEEEEE' }}
        >
            <Grid item>
                <Typography variant='h4' color='primary'>
                    {/* {project.name} */}
                    SolarCity
            </Typography>
            </Grid>
            <Grid
                item
                container
                spacing={3}
                xs={12}
                direction='row'
                justify='center'
                alignItems='center'
            >
                {
                    tasksData.map(task => {
                        return (
                            <Grid item xs={12} sm={6} md={4} lg={3}>
                                <CardTask key={task.title} {...task} />
                            </Grid>
                        )
                    })
                }
            </Grid>
        </Grid>
    )

}

export default withStyles(projectStyles)(Project)



