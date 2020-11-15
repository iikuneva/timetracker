import React from 'react'
import { Switch, Route, Link, useParams, withRouter, useRouteMatch } from 'react-router-dom'

// Material Components
import {
    Typography,
    Grid,
    Tabs,
    Tab,
    Paper,
    Box,
    Card,
    CardContent
} from '@material-ui/core'

// Styles
import { withStyles } from '@material-ui/core/styles'
import projectPMStyles from './projectPMStyles'

// Mock Data
import projectsData from '../../js/mock/mockProjectPM.js'

// Custom components
import Header from '../../components/Header/Header'

const Tasks = () => {
    let { id } = useParams()
    return (
        <Box bgcolor='#F1F8FF' boxShadow={2} p={3} minHeight={200}>
            <Typography>{`Tasks for project id: ${id}`}</Typography>
        </Box>
    )
}

const Participants = () => {
    let { id } = useParams()
    return (
        <Box bgcolor='#F1F8FF' boxShadow={2} p={3} minHeight={200}>
            <Typography>{`Participants for project id: ${id}`}</Typography>
        </Box>
    )
}

const Reports = () => {
    let { id } = useParams()
    return (
        <Box bgcolor='#F1F8FF' boxShadow={2} p={3} minHeight={200}>
            <Typography>{`Reports for project id: ${id}`}</Typography>
        </Box>
    )
}


const ProjectPM = (props) => {

    const { classes } = props

    const match = useRouteMatch()
    let { id } = useParams()

    const routeMatch = useRouteMatch(['/project/:id/tasks', '/project/:id/participants', '/project/:id/reports'])
    const currentTab = routeMatch?.path || '/project/:id/tasks'

    const project = projectsData.find((project) => project.projectId === id)

    return (
        <>
            <Grid container
                justify='center'
                alignItems='center'
                className={classes.container}
                spacing={3}
            >
                <Header />
                <Grid item xs={12}>
                    <Typography variant='h3'>
                        {project.name}
                    </Typography>
                </Grid>

                <Grid item
                    container
                    justify='center'
                    alignItems='center'
                    spacing={3}
                    xs={12} md={8} lg={8}>

                    <Grid item
                        xs={12} md={7} lg={7} xl={7}
                    >
                        <Card className={classes.card}>
                            <CardContent>
                                <Typography align='left'>
                                    <strong>Manager  </strong>
                                    {project.manager}
                                </Typography>

                                <Typography align='left'>
                                    <strong>Client  </strong>
                                    {project.client}
                                </Typography>

                                <Typography align='left'>
                                    <strong>Short Description  </strong>
                                    {project.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item
                        xs={12} md={5} lg={5} xl={5}
                    >
                        <Card className={classes.card}>
                            <CardContent>
                                <Typography align='left'>
                                    <strong>Total number of tasks  </strong>
                                    {project.tasks.length}
                                </Typography>

                                <Typography align='left'>
                                    <strong>Upcoming tasks  </strong>
                                    {project.upcomingTasks}
                                </Typography>

                                <Typography align='left'>
                                    <strong>In progress  </strong>
                                    {project.inProgressTasks}
                                </Typography>

                                <Typography align='left'>
                                    <strong>Done  </strong>
                                    {project.finishedTasks}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
                <Grid container item
                    spacing={3}
                    justify='center'
                    alignItems='center'
                    xs={12} md={8} lg={8}>
                    <Grid item xs={12}>
                        <Paper>
                            <Tabs
                                centered
                                value={currentTab}
                                indicatorColor='primary'
                                textColor='primary'
                            >
                                <Tab label='Tasks'
                                    component={Link}
                                    to={`${match.url}/tasks`}
                                    value='/project/:id/tasks'
                                />
                                <Tab label='Participants'
                                    component={Link}
                                    to={`${match.url}/participants`}
                                    value='/project/:id/participants'
                                />
                                <Tab label='Reports'
                                    component={Link}
                                    to={`${match.url}/reports`}
                                    value='/project/:id/reports'
                                />
                            </Tabs>
                        </Paper>
                        <Switch>
                            <Route exact
                                path={`${match.path}/tasks`}
                                component={Tasks} />
                            <Route exact
                                path={`${match.path}`}
                                component={Tasks} />
                            <Route exact
                                path={`${match.path}/participants`}
                                component={Participants} />
                            <Route exact
                                path={`${match.path}/reports`}
                                component={Reports} />
                        </Switch>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default withRouter(withStyles(projectPMStyles)(ProjectPM))

