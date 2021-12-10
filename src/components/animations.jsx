import * as React from 'react';
import { motion } from 'framer-motion'

const nameVariants = {
    hidden: {
        opacity: 0,
        x: "-100vw",
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 5,
        }
    }
}

const SlidingFromRightVariants = {
    hidden: {
        opacity: 0,
        x: "130vw",
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 2.5,
        }
    }
}
const SlidingFromRightVariants2 = {
    hidden: {
        opacity: 0,
        x: "-130vw",
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 3,
        }
    }
}

// const SpinningTextVariants = {
//     start: {
//         scale: 0
//     },
//     animatee: {
//         rotate: 360,
//         scale: 1,
//         transition: {
//             type: "spring",
//             stiffness: 240,
//             damping: 80
//         }
//     }
// }

// const SpinningTextAnimation = (props) => {
//     return (
//         <motion.div
//             className="size50 center"
//             variants={SpinningTextVariants}
//             initial="start"
//             animate="animatee"
//         >
//             {props.children}
//         </motion.div>
//     )
// }
// export default SpinningTextAnimation;



export const SlidingFromLeftAnimation = (props) => {
    return (
        <motion.div 
        className="size50 center"
        variants={nameVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        >
            {props.children}
        </motion.div>
    )
}
export const SlidingFromLeftAnimation2 = (props) => {
    return (
        <motion.div 
        className="size50 center"
        variants={SlidingFromRightVariants2}
        initial="hidden"
        animate="visible"
        exit="exit"
        >
            {props.children}
        </motion.div>
    )
}





export const SlidingFromRightAnimation = (props) => {
    return (
        <motion.div 
        variants={SlidingFromRightVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        >
            {props.children}
        </motion.div>
    )
}

