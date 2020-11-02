import React, { useState } from 'react'

import {
    InputLabel,
    MenuItem,
    FormControl,
    Select,
    Grid
} from '@material-ui/core'

// Styles
import { withStyles } from '@material-ui/core/styles'
import subHeaderStyles from './subHeaderStyles'

//Icon
import CompanyIcon from '@material-ui/icons/AccountBalance'
import ProjectIcon from '@material-ui/icons/Assignment'

const SubHeader = (props) => {
    const classes = props.classes

    const [companyName, setCompanyName] = useState('')
    const [projectName, setProjectName] = useState('')

    return (
        <>
            <Grid item xs={6} md={2} container justify='center' alignItems='flex-end'>
                <Grid item>
                <CompanyIcon className={classes.icon} />
                </Grid>
                <Grid item>
                <FormControl className={classes.formControl}>
                    <InputLabel id="companyName-label">Company Name</InputLabel>
                    <Select
                        labelId="companyName-label"
                        id="companyName"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem className={classes.menuItem} value='itido'>ITIDO</MenuItem>
                        <MenuItem className={classes.menuItem} value='strypes'>Strypes</MenuItem>
                        <MenuItem className={classes.menuItem} value='tumbasolution'>Tumba Solution</MenuItem>
                        <MenuItem className={classes.menuItem} value='musalasoft'>Musala Soft</MenuItem>
                    </Select>
                </FormControl>
                </Grid>
            </Grid>
            <Grid item xs={6} md={2} container justify='center' alignItems='flex-end'>
                <Grid item>
                <ProjectIcon className={classes.icon} />
                </Grid>
                <Grid item>
                <FormControl className={classes.formControl}>
                    <InputLabel id="companyName-label">Project Name</InputLabel>
                    <Select
                        labelId="projectName-label"
                        id="projectName"
                        value={projectName}
                        onChange={(e) => setProjectName(e.target.value)}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem className={classes.menuItem} value='neuralink'>Neuralink</MenuItem>
                        <MenuItem className={classes.menuItem} value='hyperloop'>Hyperloop</MenuItem>
                        <MenuItem className={classes.menuItem} value='solarcity'>SolarCity</MenuItem>
                    </Select>
                </FormControl>
                </Grid>
            </Grid>
        </>
    )

}

export default withStyles(subHeaderStyles)(SubHeader)
