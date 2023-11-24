import { motion } from 'framer-motion'
import './Transition.css'

const animation = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
}

const TransitionComponent = ({ children }) => {
    return (
        <motion.div
            className='transition'
            variants={animation}
            initial='initial'
            animate='animate'
            exit='exit'
        >
            {children}
        </motion.div>

    )
}

export default TransitionComponent