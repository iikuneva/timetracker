import React from 'react'

// Library react-multi-carousel https://www.npmjs.com/package/react-multi-carousel
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

// Material Components
import { Typography, Grid } from '@material-ui/core'

// Custom component
import CardTask from '../CardTask/CardTask'

// Styles
import { withStyles } from '@material-ui/core/styles'
import projectStyles from './projectStyles'

// Responsive object from react-multi-carousel
const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
}

const Project = (props) => {

    const { classes, name, tasks } = props

    return (
        <Grid
            item
            container
            justify="center"
            className={classes.container}
        >
            <Grid item>
                <Typography variant='h5' color='primary'>
                    {name.toUpperCase()}
                </Typography>
            </Grid>
            <Carousel
                className={classes.carouselContainer}
                responsive={responsive}
                keyBoardControl={true}
                transitionDuration={300}
                removeArrowOnDeviceType={["tablet", "mobile"]}
                containerClass='react-multi-carousel-list'
                itemClass=""
            >
                {
                    tasks.map(task => {
                        return (
                            <CardTask key={task.title} {...task} />
                        )
                    })
                }
            </Carousel>
        </Grid>
    )

}

export default withStyles(projectStyles)(Project)



