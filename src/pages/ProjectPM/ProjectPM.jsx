import React, { useState } from 'react'
import { Switch, Route, Link, BrowserRouter as Router, Redirect } from 'react-router-dom'


import {
    Typography,
    Grid,
    Tabs,
    Tab,
    Paper,
    Box
} from '@material-ui/core'

// Custom components
import Header from '../../components/Header/Header'


// Styles
import { withStyles } from '@material-ui/core/styles'
import projectPMStyles from './projectPMStyles'


function Tasks() {
    return (
        <Box boxShadow={2} p={3}>
            <Typography>Data Tasks</Typography>
        </Box>
    )
}

function Participants() {
    return (
        <Box boxShadow={2} p={3}>
            <Typography>Data Participants</Typography>
        </Box>
    )
}

function Reports() {
    return (
        <Box boxShadow={2} p={1} p={3}>
            <Typography>Data Reports</Typography>
        </Box>
    )
}


const ProjectPM = ({ match, props }) => {

    const [value, setValue] = useState(0)

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    return (
        <Grid container
            justify='center'
            alignItems='center'
            spacing={5}>

            <Grid item xs={12}>
                <Header />
            </Grid>

            <Grid item xs={12}>
                <Typography variant='h3'>
                    NewSkin Online Store
                   {/* {project.title} */}
                </Typography>
            </Grid>

            <Grid item
                container
                justify='center'
                alignItems='flex-start'
                xs={12} md={8} lg={8} spacing={3}>

                <Grid item container
                    direction='column'
                    xs={12} md={6} lg={6} xl={6}
                >
                    <Typography align='left'>
                        <strong>Manager:</strong> Guy Ritchie
                            {/* {project.manager} */}
                    </Typography>

                    <Typography align='left'>
                        <strong>Client:</strong> NewSkin Corporation
                            {/* {project.client} */}
                    </Typography>

                    <Typography align='left'>
                        <strong>Short Description:</strong> eCommerce Single Page Application Platform
                            {/* {project.description} */}
                    </Typography>
                </Grid>

                <Grid item container
                    direction='column'
                    xs={12} md={6} lg={6} xl={6}
                >
                    <Typography align='left'>
                        <strong>Total number of tasks:</strong> 32
                            {/* {project.totalNumberTasks} */}
                    </Typography>

                    <Typography align='left'>
                        <strong>Upcoming tasks:</strong> 14
                            {/* {project.upcomingTasks} */}
                    </Typography>

                    <Typography align='left'>
                        <strong>In progress:</strong> 12
                            {/* {project.progressTasks} */}
                    </Typography>

                    <Typography align='left'>
                        <strong>Done:</strong> 4
                            {/* {project.doneTasks} */}
                    </Typography>

                </Grid>

            </Grid>

            <Grid item xs={12} md={6} lg={6}>
                <Router>
                    <Paper square>
                        <Tabs
                            centered
                            value={value}
                            onChange={handleChange}
                            indicatorColor="primary"
                            textColor="primary"
                        >
                            <Tab label='Tasks' component={Link} to='/project/tasks' />
                            <Tab label='Participants' component={Link} to='/project/participants' />
                            <Tab label='Reports' component={Link} to='/project/reports' />
                        </Tabs>
                    </Paper>
                    <Switch>
                        <Route exact path='/project/tasks' component={Tasks} />
                        <Redirect exact from='/project' to='/project/tasks' />
                        <Route path='/project/participants' component={Participants} />
                        <Route path='/project/reports' component={Reports} />
                    </Switch>
                </Router>

            </Grid>
        </Grid>
    )
}

export default withStyles(projectPMStyles)(ProjectPM)

