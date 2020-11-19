const projectStyles = (theme) => {
    return {
        carouselContainer: {
            width: '100%',
            padding: '1.5em',
            [theme.breakpoints.down("sm")] : {
                padding: 0,
                backgroundColor: 'none'
            }
        },
        container: {
            width: '90%',
            backgroundColor: '#EEEEEE',
            borderRadius: '10px',
            margin: '2em',
            padding: '1em 3em',
            [theme.breakpoints.down("sm")] : {
                padding: 0,
                backgroundColor: 'white'
            }
        }

    }

}

export default projectStyles