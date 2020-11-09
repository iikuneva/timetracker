import React, { useState } from 'react'
import TaskDialog from '../TaskDialog/TaskDialog'

// Material Components
import {
  Button,
  Card,
  CardHeader,
  CardActions,
  CardContent,
  Typography,
  Divider,
  Collapse
} from '@material-ui/core'


import clsx from 'clsx'

// Styles
import { withStyles } from '@material-ui/core/styles'
import cardTaskStyles from './cardTaskStyles'

// Icons
import IconButton from '@material-ui/core/IconButton'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import TimerIcon from '@material-ui/icons/Timer'


const CardTask = (props) => {

  const { classes, title, assignee, dueDate, tracked, description } = props

  const [openTaskDialog, setOpenTaskDialog] = useState(false)
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  return (
    <>
      <TaskDialog
        open={openTaskDialog}
        handleClose={() => setOpenTaskDialog(false)}
        title={title}
      />
      <Card className={classes.card}>
        <CardHeader
          title={title}
          className={classes.cardHeader}
        />
        <CardContent className={classes.cardContent}>
          <Typography>
            Assignee: {assignee}
          </Typography>
          <Typography>
            Due Date: {dueDate}
          </Typography>
          <Typography className={classes.tracked}>
            <TimerIcon className={classes.icon} />Tracked: {tracked}
          </Typography>
        </CardContent>
        <Divider variant='middle' />
        <CardActions disableSpacing>
          <Button
            size='small'
            color='primary'
            onClick={() => setOpenTaskDialog(true)}
          >
            Track
          </Button>
          <Button
            size='small'
            color='primary'
            onClick={() => {
              
            }}
          >
            Track 8 hours
          </Button>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>

        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography variant='h6'>Description</Typography>
            <Typography variant='body2'>
              {description}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </>
  )
}

export default withStyles(cardTaskStyles)(CardTask)