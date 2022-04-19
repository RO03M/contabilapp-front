export const backgroundVariants = {
    closed: {
        clipPath: "circle(0px at calc(100% - 44px) calc(100% - 44px))",
        transition: {
            duration: .4
        }
    },
    open: {
        clipPath: "circle(2000px at calc(100% - 44px) calc(100% - 44px))",
        transition: {
            duration: .6
        }
    }
}

export const buttonVariants = {
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