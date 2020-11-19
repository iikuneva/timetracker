import React, { useState } from 'react'

// Material Components
import {
    Typography,
    Box,
    Collapse,
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Avatar,
    MenuItem,
    FormControl,
    Select
} from '@material-ui/core'

// Icons
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'

// Custom component
import TaskCarousel from '../TasksCarousel/TasksCarousel'

// Mock Data
import participants from '../../js/mock/mockPartcipants.js'


function Row (props) {
    const { participant } = props
    const [open, setOpen] = useState(false)
    const [trackedTime, setTrackedTime] = useState(participant.tracked)

    return (
        <>
            <TableRow>
                <TableCell>
                    <IconButton size="small" onClick={() => setOpen(!open)}>
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    <Avatar alt={participant.name} src={participant.avatarUrl} />
                </TableCell>
                <TableCell align='center'>{participant.name}</TableCell>
                <TableCell align='center'>{participant.role}</TableCell>
                <TableCell align='center'>{participant.assignedTasks}</TableCell>
                <TableCell align='center'>{participant.completedTasks}</TableCell>
                <TableCell align='center'>
                    <FormControl>
                        <Select
                            style={{ minWidth: 100, fontSize: 12 }}
                            id="trackedTime"
                            value={trackedTime}
                            onChange={(e) => setTrackedTime(e.target.value)}
                        >
                            <MenuItem value={participant.tracked}>{participant.tracked}</MenuItem>
                            <MenuItem value='currentMonth'>Current month</MenuItem>
                            <MenuItem value='lastMonth'>Last month</MenuItem>
                            <MenuItem value='currentWeek'>Current Week</MenuItem>
                            <MenuItem value='lastWeek'>Last Week</MenuItem>
                        </Select>
                    </FormControl>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={12}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box margin={2} style={{maxWidth: '70em'}}>
                            <Typography variant="h6" gutterBottom component="div">
                                Tasks
                            </Typography>
                            <TaskCarousel tasks={[...participant.tasks]} />
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </>
    )
}


const ParticipantsTab = (props) => {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell />
                        <TableCell>Avatar</TableCell>
                        <TableCell align='center'>Name</TableCell>
                        <TableCell align='center'>Role</TableCell>
                        <TableCell align='center'>Assigned Tasks</TableCell>
                        <TableCell align='center'>Completed Tasks</TableCell>
                        <TableCell align='center'>Tracked Time</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {participants.map((participant) => (
                        <Row key={participant.name} participant={participant}/>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}


export default ParticipantsTab
