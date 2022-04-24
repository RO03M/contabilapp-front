export const closeOpenScaleVariant = {
    closed: {
        opacity: 0,
        scale: 0,
        transition: {
            scale: {
                duration: 0.1
            },
            opacity: {
                duration: 0.15
            }
        }
    },
    open: {
        opacity: 1,
        scale: 1,
        transition: {
            delay: 0.2
        }
    }
}