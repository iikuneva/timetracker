import React, { useState, useEffect } from 'react'

// Entities
import getWorkingHours from '../../js/utils/getWorkingHours.js'

// Material Components
import {
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Grid,
    Typography,
    TextField,
    Checkbox,
    FormControlLabel,
    FormControl,
    InputAdornment,
} from '@material-ui/core'

// Icons
import TimerIcon from '@material-ui/icons/Timer'



const TaskDialog = (props) => {

    const [open, setOpen] = useState(false)
    const [showEndDate, setShowEndDate] = useState(false)

    const [hours, setHours] = useState(0)
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [workDescription, setWorkDescription] = useState('')

    const { title } = props

    const handleOpen = () => {
        setOpen(props.open)
    }

    useEffect(handleOpen)

    useEffect(() => {
        if (showEndDate) {
            setHours(getWorkingHours(startDate, endDate))
        }
    }, [endDate])

    return (
        <Dialog
            open={open}
            onClose={props.handleClose}
            aria-labelledby='responsive-dialog-title'
        >
            <DialogTitle id='title' style={{ backgroundColor: '#FFBA60'}}>
                <Typography align='center' style={{ fontSize: '1.2em', color: 'white'  }}>
                    {title}
                </Typography>
            </DialogTitle>
            <DialogContent>
                <form>
                    <Grid container justify='flex-start' alignItems='center' spacing={2}>
                        <Grid item xs={12} md={5}>
                            <TextField
                                fullWidth={true}
                                value={hours}
                                onChange={(e) => setHours(e.target.value)}
                                disabled={showEndDate}
                                type='number'
                                label='Time Spent'
                                autoFocus
                                margin='dense'
                                id='time-spent'
                                InputProps={
                                    {
                                        inputProps: {
                                            min: 0
                                        },
                                        endAdornment: (
                                            <InputAdornment position='end'>
                                                <TimerIcon />
                                            </InputAdornment>
                                        )
                                    }}
                            />
                        </Grid>
                        <Grid item container justify='space-between' spacing={2}>
                            <Grid item xs={12} md={5}>
                                <TextField
                                    value={startDate}
                                    fullWidth={true}
                                    onChange={(e) => setStartDate(e.target.value)}
                                    type='datetime-local'
                                    label='Start date'
                                    margin='dense'
                                    id='start-date'
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} md={5}>
                                {showEndDate ?
                                    <TextField
                                        value={endDate}
                                        fullWidth={true}
                                        onChange={(e) => setEndDate(e.target.value)}
                                        type='datetime-local'
                                        label='End date'
                                        autoFocus
                                        margin="dense"
                                        id="end-date"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                    : null}
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            value={showEndDate}
                                            color="primary"
                                            checked={showEndDate}
                                            onChange={(e) => {
                                                // console.log(e.target.checked)
                                                setShowEndDate(e.target.checked);
                                            }}
                                        />
                                    }
                                    label="Add End Date"
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth={true}
                                value={workDescription}
                                onChange={(e) => setWorkDescription(e.target.value)}
                                type='text'
                                label='Work Description'
                                id='work-description'
                                multiline
                                rows={4}
                                placeholder="Describe your work here..."
                                variant="outlined"
                            />
                        </Grid>
                    </Grid>
                </form>
            </DialogContent>
            <DialogActions>
                <Button
                    onClick={props.handleClose}
                    color='secondary'
                >
                    Cancel
                </Button>
                <Button
                    autoFocus
                    color='primary'
                    onClick={props.handleClose}
                >
                    Track
                </Button>
            </DialogActions>
        </Dialog>
    )
}


export default TaskDialog

