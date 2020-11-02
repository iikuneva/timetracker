import React, { useState } from 'react'

// Material Components
import {
  Grid,
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

//Icons
import IconButton from '@material-ui/core/IconButton'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import TimerIcon from '@material-ui/icons/Timer'


const CardTask = (props) => {

  const { classes, title, assignee, dueDate, tracked, description } = props
  // const onTrack = (value) => {
  // }

  // const onTrackEight = (value) => {
  // }

  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  return ( 
      <Card className={classes.card}>
        <CardHeader
          title={title}
          className={classes.cardHeader}
        />
        <CardContent className={classes.cardContent}>
          <Typography>
            Assignee: {assignee}
            {/* Assignee: Irina Lazarova, Viktor Velchev */}
          </Typography>
          <Typography className={classes.dueDate}>
            Due Date: {dueDate}
            {/* Due Date: 23.11.2020 */}
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
            onClick={() => {
              // onTrack(value)
            }}
          >
            Track
          </Button>
          <Button
            size='small'
            color='primary'
            onClick={() => {
              // onTrackEight(value)
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
              {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. */}
            </Typography>
          </CardContent>
        </Collapse>

      </Card>
  )
}

export default withStyles(cardTaskStyles)(CardTask)