import React from 'react'

// Library react-multi-carousel https://www.npmjs.com/package/react-multi-carousel
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

// Custom component
import CardTask from '../CardTask/CardTask'

// Styles
import { withStyles } from '@material-ui/core/styles'
import tasksCarouselStyles from './tasksCarouselStyles'

// Responsive object from react-multi-carousel
const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
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

const TasksCarousel = (props) => {

    const { classes, tasks } = props

    return (
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

    )

}

export default withStyles(tasksCarouselStyles)(TasksCarousel)



