import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const RevealDiv = ({children}) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    const variants = {
        hidden: { opacity: 0, y: 80 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.6 }}
            className="reveal-div"
        >
            {children}
        </motion.div>
    );
};

export default RevealDiv;
