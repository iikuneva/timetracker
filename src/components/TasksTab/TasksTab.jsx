import React from 'react'

// import CardTask from '../CardTask/CardTask'
import TasksCarousel from '../TasksCarousel/TasksCarousel'

// Material Components
import {
    Typography,
    Box
} from '@material-ui/core'

// Mock Data
import tasksData from '../../js/mock/mockTasksData'

const TasksTab = (props) => {
    return (
        <Box boxShadow={2} p={3} minHeight={200}>
            <Typography>NOT ASSIGNED TASKS</Typography>
            <TasksCarousel tasks={tasksData.notAssigned} />

            <Typography>ASSIGNED TASKS</Typography>
            <TasksCarousel tasks={tasksData.assigned} />

            <Typography>COMPLETED TASKS</Typography>
            <TasksCarousel tasks={tasksData.completed} />
        </Box>
    )
}

export default TasksTab