export const submitButton = {
    open: {
        scale: 1,
        opacity: 1,
        transition: {
            delay: 0.2,
        }
    },
    closed: {
        scale: 0,
        opacity: 0,
        transition: {
            scale: {
                duration: 0.1
            },
            opacity: {
                duration: 0.15
            }
        }
    }
};