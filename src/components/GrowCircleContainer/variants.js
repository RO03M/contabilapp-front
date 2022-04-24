export const backgroundVariants = {
    closed: (custom) => ({
        clipPath: `circle(0px at ${custom?.x}px ${custom?.y}px)`,
        transition: {
            duration: .4
        }
    }),
    open: (custom) => ({
        clipPath: `circle(2000px at ${custom?.x}px ${custom?.y}px)`,
        transition: {
            duration: .6
        }
    })
}
